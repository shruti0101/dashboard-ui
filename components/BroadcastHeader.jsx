import { ChevronRight } from 'lucide-react';

export default function BroadcastHeader() {
  const trail = ['RCS', 'Messaging', 'Broadcast'];

  return (
    <div className="bg-white border border-slate-200 border-l-4 border-l-brand rounded-xl2 shadow-card px-5 py-4">
      <div className="flex items-center gap-2 text-[15px] font-semibold text-slate-500">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={14} className="text-slate-300" />}
              <span className={isLast ? 'text-brand' : 'text-slate-700'}>{item}</span>
            </span>
          );
        })}
      </div>
      <p className="text-[13px] text-slate-500 mt-1">
        Set audience, campaign details, and send when ready.
      </p>
    </div>
  );
}