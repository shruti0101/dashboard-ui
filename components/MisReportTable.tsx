import {
  User,
  Users,
  CalendarDays,
  Tag,
  Rocket,
  Send,
  CheckCheck,
  BookOpen,
  AlertCircle,
  Reply,
} from 'lucide-react';
import clsx from 'clsx';

type Row = {
  user: string;
  parent: string;
  date: string;
  category: string;
  initiated: number;
  sent: number;
  delivered: number;
  read: number;
  failed: number;
  reply: number;
};

const ROWS: Row[] = [
  { user: 'jodhpur', parent: 'vortexit.ai', date: 'Sep 15, 2026', category: 'Utility', initiated: 0, sent: 0, delivered: 1, read: 9, failed: 0, reply: 0 },
  { user: 'jodhpur', parent: 'vortexit.ai', date: 'Sep 14, 2026', category: 'Utility', initiated: 436, sent: 435, delivered: 413, read: 317, failed: 3, reply: 0 },
  { user: 'jodhpur', parent: 'vortexit.ai', date: 'Sep 13, 2026', category: 'Utility', initiated: 3, sent: 0, delivered: 0, read: 0, failed: 3, reply: 0 },
  { user: 'jodhpur', parent: 'vortexit.ai', date: 'Sep 12, 2026', category: 'Utility', initiated: 2, sent: 0, delivered: 0, read: 0, failed: 2, reply: 0 },
  { user: 'jodhpur', parent: 'vortexit.ai', date: 'Sep 11, 2026', category: 'Utility', initiated: 7180, sent: 7049, delivered: 6861, read: 4869, failed: 167, reply: 0 },
];

const COLUMNS = [
  { key: 'user', label: 'USER', icon: User },
  { key: 'parent', label: 'PARENT', icon: Users },
  { key: 'date', label: 'SENT DATE', icon: CalendarDays },
  { key: 'category', label: 'CATEGORY', icon: Tag },
  { key: 'initiated', label: 'INITIATED', icon: Rocket },
  { key: 'sent', label: 'SENT', icon: Send },
  { key: 'delivered', label: 'DELIVERED', icon: CheckCheck },
  { key: 'read', label: 'READ', icon: BookOpen },
  { key: 'failed', label: 'FAILED', icon: AlertCircle },
  { key: 'reply', label: 'REPLY', icon: Reply },
] as const;

function Pill({ value, color }: { value: number; color: string }) {
  const styles: Record<string, string> = {
    amber: 'bg-amber-50 text-amber-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    rose: 'bg-rose-50 text-rose-600',
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center min-w-[42px] rounded-full px-2.5 py-1 text-[12.5px] font-semibold',
        styles[color]
      )}
    >
      {value.toLocaleString()}
    </span>
  );
}

export default function MisReportTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[980px]">
          <thead>
            <tr className="border-b border-slate-100">
              {COLUMNS.map((col) => {
                const Icon = col.icon;
                return (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-[11px] font-semibold tracking-wide text-slate-400 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1.5">
                      <Icon size={12} />
                      {col.label}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-50 last:border-b-0 border-l-2 border-l-indigo-100 hover:bg-slate-50/60 transition-colors"
              >
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                    <span className="h-6 w-6 rounded-full bg-indigo-50 text-brand flex items-center justify-center">
                      <User size={12} />
                    </span>
                    {row.user}
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-[13px] text-slate-600">
                  <span className="text-[10px] font-semibold text-slate-400 mr-1.5">PARENT</span>
                  {row.parent}
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap text-[13px] text-slate-600">
                  <span className="text-[10px] font-semibold text-slate-400 mr-1.5">DATE</span>
                  {row.date}
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-600 text-[12px] font-medium px-2.5 py-1">
                    {row.category}
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.initiated} color="amber" />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.sent} color="indigo" />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.delivered} color="emerald" />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.read} color="indigo" />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.failed} color="rose" />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <Pill value={row.reply} color="emerald" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-[12.5px] text-slate-400 py-4">
        Showing all {ROWS.length} records
      </div>
    </div>
  );
}
