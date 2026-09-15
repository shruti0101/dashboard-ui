import { User, CornerDownRight, Link as LinkIcon, Copy, Eye, Pencil, Trash2 } from 'lucide-react';
import clsx from 'clsx';

type SubTag = { label: string; kind: 'custom' | 'media' };

type Template = {
  user: string;
  name: string;
  wabaId: string;
  phone: string;
  category: string;
  subTags: SubTag[];
  language: string;
  preview: (string | { variable: string })[];
  status: 'Approved' | 'Pending' | 'Rejected';
  createdAt: string;
};

const TEMPLATES: Template[] = [
  {
    user: 'jodhpur',
    name: 'info_update_new_vidio',
    wabaId: '160034436476075',
    phone: '+918107838769',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Video', kind: 'media' },
    ],
    language: 'en',
    preview: ['नमस्कार, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' ', { variable: '{{5}}' }],
    status: 'Approved',
    createdAt: '9/14/26, 10:26 AM',
  },
  {
    user: 'jodhpur',
    name: 'info_update_new_444',
    wabaId: '160034436476075',
    phone: '+918107838769',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Image', kind: 'media' },
    ],
    language: 'en',
    preview: ['नमस्कार, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' Pl'],
    status: 'Approved',
    createdAt: '9/14/26, 10:23 AM',
  },
  {
    user: 'jodhpur',
    name: 'info_update_01',
    wabaId: '160034436476075',
    phone: '+918107838769',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Image', kind: 'media' },
    ],
    language: 'en',
    preview: ['नमस्कार, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' ', { variable: '{{5}}' }],
    status: 'Approved',
    createdAt: '9/14/26, 10:22 AM',
  },
  {
    user: 'jodhpur',
    name: 'info_update_02',
    wabaId: '160034436476075',
    phone: '+918107838769',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Image', kind: 'media' },
    ],
    language: 'en',
    preview: ['नमस्कार, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' ', { variable: '{{5}}' }],
    status: 'Approved',
    createdAt: '9/14/26, 10:22 AM',
  },
  {
    user: 'jodhpur',
    name: 'info_update_video',
    wabaId: '160034436476075',
    phone: '+918107838769',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Video', kind: 'media' },
    ],
    language: 'en',
    preview: ['नमस्कार, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' ', { variable: '{{5}}' }],
    status: 'Approved',
    createdAt: '9/14/26, 10:22 AM',
  },
  {
    user: 'jodhpur',
    name: 'info_update_info',
    wabaId: '944283632020401',
    phone: '',
    category: 'utility',
    subTags: [
      { label: 'custom', kind: 'custom' },
      { label: 'Image', kind: 'media' },
    ],
    language: 'en',
    preview: ['Hello, ', { variable: '{{1}}' }, ' ', { variable: '{{2}}' }, ' ', { variable: '{{3}}' }, ' ', { variable: '{{4}}' }, ' Plea'],
    status: 'Approved',
    createdAt: '9/12/26, 10:51 PM',
  },
];

const COLUMNS = [
  'User',
  'Template Name',
  'Primary Info',
  'Category',
  'Language',
  'Status',
  'Created At',
  'Action',
];

function CategoryCell({ category, subTags }: { category: string; subTags: SubTag[] }) {
  return (
    <div className="flex flex-col gap-1.5 items-start">
      <span className="bg-brand text-white text-[11px] font-semibold rounded-md px-2.5 py-1">
        {category}
      </span>
      {subTags.map((tag) => (
        <span key={tag.label} className="flex items-center gap-1 text-slate-300">
          <CornerDownRight size={12} />
          <span
            className={clsx(
              'text-[11px] font-semibold rounded-md px-2.5 py-0.5 border',
              tag.kind === 'custom'
                ? 'text-rose-500 border-rose-200 bg-rose-50'
                : 'text-white bg-teal-500 border-teal-500'
            )}
          >
            {tag.label}
          </span>
        </span>
      ))}
    </div>
  );
}

function LanguageCell({
  language,
  preview,
}: {
  language: string;
  preview: (string | { variable: string })[];
}) {
  return (
    <div className="max-w-[220px]">
      <div className="text-[13px] font-medium text-slate-700 mb-1">{language}</div>
      <p className="text-[12.5px] leading-relaxed text-slate-600">
        {preview.map((chunk, i) =>
          typeof chunk === 'string' ? (
            <span key={i}>{chunk}</span>
          ) : (
            <span key={i} className="text-brand font-medium">
              {chunk.variable}
            </span>
          )
        )}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: Template['status'] }) {
  const styles: Record<Template['status'], string> = {
    Approved: 'bg-emerald-50 text-emerald-600',
    Pending: 'bg-amber-50 text-amber-600',
    Rejected: 'bg-rose-50 text-rose-600',
  };
  const dot: Record<Template['status'], string> = {
    Approved: 'bg-emerald-500',
    Pending: 'bg-amber-500',
    Rejected: 'bg-rose-500',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium',
        styles[status]
      )}
    >
      <span className={clsx('h-1.5 w-1.5 rounded-full', dot[status])} />
      {status}
    </span>
  );
}

function ActionButtons() {
  const actions = [
    { icon: Copy, color: 'text-slate-500 bg-slate-100 hover:bg-slate-200' },
    { icon: Eye, color: 'text-slate-500 bg-slate-100 hover:bg-slate-200' },
    { icon: Pencil, color: 'text-brand bg-brand-light hover:bg-brand/10' },
    { icon: Trash2, color: 'text-rose-600 bg-rose-50 hover:bg-rose-100' },
  ];
  return (
    <div className="flex items-center gap-1.5">
      {actions.map((a, i) => {
        const Icon = a.icon;
        return (
          <button
            key={i}
            className={clsx('h-7 w-7 rounded-full flex items-center justify-center transition-colors', a.color)}
          >
            <Icon size={13} />
          </button>
        );
      })}
    </div>
  );
}

export default function TemplateTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-slate-50">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[13px] font-semibold text-slate-700 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TEMPLATES.map((t, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-b-0 align-top hover:bg-slate-50/60">
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-2 text-[13.5px] font-medium text-slate-700">
                    <span className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <User size={13} />
                    </span>
                    {t.user}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-1.5 text-[13px] text-slate-700">
                    {t.name}
                    <LinkIcon size={11} className="text-slate-400" />
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-[12.5px] text-slate-600 leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-700">Wabald: </span>
                    {t.wabaId}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">PhoneNumber: </span>
                    {t.phone}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <CategoryCell category={t.category} subTags={t.subTags} />
                </td>
                <td className="px-4 py-4">
                  <LanguageCell language={t.language} preview={t.preview} />
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={t.status} />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-[12.5px] text-slate-600">
                  {t.createdAt}
                </td>
                <td className="px-4 py-4">
                  <ActionButtons />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}