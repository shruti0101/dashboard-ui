import { RefreshCw, SlidersHorizontal, PlusCircle } from 'lucide-react';

export default function ReportToolbar() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2">
      <button className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50">
        <RefreshCw size={14} />
        Refresh
      </button>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50">
          <SlidersHorizontal size={14} />
          Filter
        </button>
        <button className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50">
          <PlusCircle size={14} />
          Create Campaign
        </button>
      </div>
    </div>
  );
}