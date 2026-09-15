import { Send } from 'lucide-react';

export default function BroadcastFooter({ recipients = 0 }: { recipients?: number }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card px-6 py-4 flex items-center justify-between flex-wrap gap-3">
      <span className="text-[14px] text-slate-700">
        <span className="font-bold">{recipients}</span> recipients
      </span>

      <div className="flex items-center gap-2">
        <button className="border border-slate-200 rounded-lg px-5 py-2.5 text-[13.5px] font-semibold text-slate-700 hover:bg-slate-50">
          Schedule
        </button>
        <button className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-950 transition-colors text-white text-[13.5px] font-semibold rounded-lg px-5 py-2.5">
          <Send size={14} />
          Send Now
        </button>
      </div>
    </div>
  );
}