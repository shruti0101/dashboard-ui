import { User, CalendarDays } from 'lucide-react';
import Pagination from './Pagination';

type Contact = {
  name: string;
  countryCode: string;
  phone: string;
  attributes: { label: string; value: string }[];
  subscribeDate: string;
};

const CONTACTS: Contact[] = [
  {
    name: 'DINESH MANTRI',
    countryCode: 'IN',
    phone: '+919829230214',
    attributes: [
      { label: 'profileName', value: 'DINESH MAN...' },
      { label: 'waNumber', value: '919829230214' },
    ],
    subscribeDate: 'Sep 14, 2026',
  },
  {
    name: 'P',
    countryCode: 'IN',
    phone: '+917014073859',
    attributes: [
      { label: 'profileName', value: 'P' },
      { label: 'waNumber', value: '917014073859' },
    ],
    subscribeDate: 'Sep 14, 2026',
  },
  {
    name: 'Rishi Raaj',
    countryCode: 'IN',
    phone: '+919799199229',
    attributes: [
      { label: 'profileName', value: 'Rishi Raaj' },
      { label: 'waNumber', value: '919799199229' },
    ],
    subscribeDate: 'Sep 14, 2026',
  },
  {
    name: 'Deshraj Lawa 👑',
    countryCode: 'IN',
    phone: '+919829126464',
    attributes: [
      { label: 'profileName', value: 'Deshraj Lawa...' },
      { label: 'waNumber', value: '919829126464' },
    ],
    subscribeDate: 'Sep 14, 2026',
  },
  {
    name: '😎😎',
    countryCode: 'IN',
    phone: '+918619300446',
    attributes: [
      { label: 'profileName', value: '😎😎' },
      { label: 'waNumber', value: '918619300446' },
    ],
    subscribeDate: 'Sep 14, 2026',
  },
];

const COLUMNS = [
  'NAME',
  'CONTACTS',
  'GROUP',
  'TAGS',
  'CATEGORIES',
  'ATTRIBUTES',
  'SUBSCRIBE DATE',
  'ACTION',
];

export default function ContactsTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-brand-light/60">
              <th className="px-4 py-3 w-10">
                <input type="checkbox" className="rounded border-slate-300 text-brand" />
              </th>
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[11.5px] font-semibold tracking-wide text-slate-500 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CONTACTS.map((c) => (
              <tr key={c.phone} className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/60">
                <td className="px-4 py-4">
                  <input type="checkbox" className="rounded border-slate-300 text-brand" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-2 text-[13.5px] font-medium text-slate-700">
                    <span className="h-6 w-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                      <User size={12} />
                    </span>
                    {c.name}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-[13px] text-slate-600">
                  <span className="text-[11px] font-semibold text-slate-400 mr-1">
                    {c.countryCode}
                  </span>
                  {c.phone}
                </td>
                <td className="px-4 py-4" />
                <td className="px-4 py-4 whitespace-nowrap">
                  <button className="text-[11.5px] font-medium text-brand border border-brand/30 bg-brand-light rounded-full px-3 py-1">
                    Add Tags
                  </button>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <button className="text-[11.5px] font-medium text-brand border border-brand/30 bg-brand-light rounded-full px-3 py-1">
                    Add Category
                  </button>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-col gap-1.5">
                    {c.attributes.map((a) => (
                      <span
                        key={a.label}
                        className="inline-flex w-fit items-center rounded-md bg-emerald-50 text-emerald-600 text-[11px] font-medium px-2 py-1 whitespace-nowrap"
                      >
                        {a.label}: {a.value}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-1.5 text-[12.5px] text-slate-500">
                    <CalendarDays size={13} className="text-slate-400" />
                    {c.subscribeDate}
                  </span>
                </td>
                <td className="px-4 py-4" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalPages={35} />
    </div>
  );
}
