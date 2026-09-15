import { LayoutGrid, MessageCircle } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="flex items-start justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-brand flex items-center justify-center shrink-0">
          <LayoutGrid size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-[19px] font-semibold text-slate-800 leading-tight">
            Operations Dashboard
          </h1>
          <p className="text-[13px] text-slate-500 mt-0.5">
            Live messaging performance across your channels
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border border-slate-200 bg-white rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-600">
        <MessageCircle size={14} className="text-emerald-500" />
        WHATSAPP
      </div>
    </div>
  );
}
