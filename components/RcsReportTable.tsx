import { User, Info, Tag, RefreshCw, Wallet, Settings } from 'lucide-react';
import EmptyState from './EmptyState';

const COLUMNS = [
  { label: 'USER', icon: User },
  { label: 'PRIMARY', icon: Info },
  { label: 'CATEGORY', icon: Tag },
  { label: 'STATUS', icon: RefreshCw },
  { label: 'COST', icon: Wallet },
  { label: 'ACTIONS', icon: Settings },
];

export default function RcsReportTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="bg-indigo-50/70">
              {COLUMNS.map((col) => {
                const Icon = col.icon;
                return (
                  <th
                    key={col.label}
                    className="px-4 py-3 text-[11px] font-semibold tracking-wide text-brand whitespace-nowrap"
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
        </table>

        <EmptyState />
      </div>
    </div>
  );
}