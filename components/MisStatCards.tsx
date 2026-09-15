import { Rocket, Send, CheckCheck, BookOpen, AlertCircle, Reply } from 'lucide-react';
import clsx from 'clsx';

type Stat = {
  label: string;
  value: string;
  sub?: string;
  icon: React.ElementType;
  color: string;
};

const STATS: Stat[] = [
  { label: 'Initiated', value: '7,621', icon: Rocket, color: 'amber' },
  { label: 'Sent', value: '7,484', icon: Send, color: 'indigo' },
  { label: 'Delivered', value: '7,275', sub: '97% rate', icon: CheckCheck, color: 'emerald' },
  { label: 'Read', value: '5,195', icon: BookOpen, color: 'indigo' },
  { label: 'Failed', value: '175', icon: AlertCircle, color: 'rose' },
  { label: 'Reply', value: '232', icon: Reply, color: 'emerald' },
];

const BORDER: Record<string, string> = {
  amber: 'border-l-amber-400',
  indigo: 'border-l-indigo-500',
  emerald: 'border-l-emerald-500',
  rose: 'border-l-rose-500',
};

const ICON_BG: Record<string, string> = {
  amber: 'bg-amber-50 text-amber-500',
  indigo: 'bg-indigo-50 text-indigo-500',
  emerald: 'bg-emerald-50 text-emerald-500',
  rose: 'bg-rose-50 text-rose-500',
};

export default function MisStatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className={clsx(
              'bg-white rounded-xl2 shadow-card border border-slate-200 border-l-4 p-4 flex flex-col gap-3',
              BORDER[s.color]
            )}
          >
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-semibold tracking-wide text-slate-400">
                {s.label.toUpperCase()}
              </span>
              <span
                className={clsx(
                  'h-8 w-8 rounded-lg flex items-center justify-center shrink-0',
                  ICON_BG[s.color]
                )}
              >
                <Icon size={15} />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[22px] font-bold text-slate-800 leading-none">
                {s.value}
              </span>
              {s.sub && (
                <span className="text-[12px] font-semibold text-emerald-500">{s.sub}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
