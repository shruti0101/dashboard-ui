import { LucideIcon } from 'lucide-react';

export default function ComingSoonPanel({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-12 flex flex-col items-center text-center gap-3">
      <div className="h-12 w-12 rounded-xl bg-brand-light text-brand flex items-center justify-center">
        <Icon size={22} />
      </div>
      <h2 className="text-[16px] font-semibold text-slate-800">{title}</h2>
      <p className="text-[13.5px] text-slate-500 max-w-sm">{description}</p>
    </div>
  );
}
