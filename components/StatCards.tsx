import { Rocket, Send, CheckCheck, Eye, AlertCircle, Reply } from 'lucide-react';
import clsx from 'clsx';

type Stat = {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string; // tailwind color base e.g. amber
};

const STATS: Stat[] = [
  { label: 'Initiated', value: '7621', icon: Rocket, color: 'amber' },
  { label: 'Sent', value: '7484', icon: Send, color: 'slate' },
  { label: 'Delivered', value: '7275', icon: CheckCheck, color: 'emerald' },
  { label: 'Read', value: '5195', icon: Eye, color: 'indigo' },
  { label: 'Failed', value: '175', icon: AlertCircle, color: 'rose' },
  { label: 'Reply', value: '232', icon: Reply, color: 'sky' },
];

const BORDER: Record<string, string> = {
  amber: 'border-l-amber-400',
  slate: 'border-l-slate-400',
  emerald: 'border-l-emerald-500',
  indigo: 'border-l-indigo-500',
  rose: 'border-l-rose-500',
  sky: 'border-l-sky-400',
};

const ICON_BG: Record<string, string> = {
  amber: 'bg-amber-50 text-amber-500',
  slate: 'bg-slate-100 text-slate-500',
  emerald: 'bg-emerald-50 text-emerald-500',
  indigo: 'bg-indigo-50 text-indigo-500',
  rose: 'bg-rose-50 text-rose-500',
  sky: 'bg-sky-50 text-sky-500',
};

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <span className="text-[22px] font-bold text-slate-800 leading-none">
              {s.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
