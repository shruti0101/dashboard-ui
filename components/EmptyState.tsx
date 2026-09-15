import { Settings, Ban, Search, X, Sparkles } from 'lucide-react';

export default function EmptyState({
  title = 'No data found',
  description = 'Try adjusting filters or refresh to load records.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-14">
      <div className="relative h-[140px] w-[180px] mb-5">
        {/* base "browser window" card */}
        <div className="absolute inset-x-6 top-4 bottom-2 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden">
          <div className="h-2.5 bg-slate-100 flex items-center gap-1 px-1.5">
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[9px] font-bold tracking-wide text-rose-400">NO DATA</span>
          </div>
        </div>

        {/* decorative corner shapes */}
        <span className="absolute left-0 bottom-0 h-8 w-8 bg-amber-300/70 rotate-45 rounded-md" />
        <span className="absolute right-0 bottom-2 h-7 w-7 bg-amber-300/70 rotate-45 rounded-md" />
        <span className="absolute left-2 top-0 h-5 w-5 bg-indigo-200 rounded-md rotate-12" />

        {/* floating icon badges */}
        <span className="absolute -top-1 left-6 h-7 w-7 rounded-full bg-amber-400 flex items-center justify-center text-white shadow">
          <Ban size={13} />
        </span>
        <span className="absolute top-6 right-0 h-8 w-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-500 shadow">
          <Settings size={14} />
        </span>
        <span className="absolute top-14 right-6 h-7 w-7 rounded-full bg-rose-500 flex items-center justify-center text-white shadow">
          <Search size={12} />
        </span>
        <span className="absolute bottom-4 right-10 h-6 w-6 rounded-full bg-white border-2 border-rose-300 flex items-center justify-center text-rose-400 shadow">
          <X size={11} />
        </span>
        <span className="absolute top-2 right-16 text-indigo-300">
          <Sparkles size={14} />
        </span>
      </div>

      <h3 className="text-[15px] font-semibold text-slate-700">{title}</h3>
      <p className="text-[13px] text-slate-400 mt-1">{description}</p>
    </div>
  );
}