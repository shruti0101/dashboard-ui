'use client';

import { MessageCircle, Eraser, RefreshCw } from 'lucide-react';

export default function MisReportHeader({
  channelLabel = 'WhatsApp',
}: {
  channelLabel?: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card px-5 py-4 flex items-start justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-brand flex items-center justify-center shrink-0">
          <MessageCircle size={19} className="text-white" />
        </div>
        <div>
          <h1 className="text-[16px] font-semibold text-slate-800 leading-tight">
            {channelLabel} MIS Report
          </h1>
          <p className="text-[13px] text-slate-500 mt-0.5">
            Delivery performance by user, category &amp; template
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 text-[13px] font-medium text-slate-600 border border-slate-200 rounded-lg px-3.5 py-2 hover:bg-slate-50">
          <Eraser size={14} />
          Clear
        </button>
        <button className="flex items-center gap-1.5 text-[13px] font-medium text-slate-600 border border-slate-200 rounded-lg px-3.5 py-2 hover:bg-slate-50">
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>
    </div>
  );
}
