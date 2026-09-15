import { Signal, Wifi, BatteryFull, ShieldCheck, User } from 'lucide-react';

export default function RcsPhonePreview({ botName = 'RCS Bot' }: { botName?: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-4">
      <span className="text-[10.5px] font-semibold tracking-wide text-slate-400">
        LIVE PREVIEW
      </span>
      <h3 className="text-[14.5px] font-semibold text-slate-800 mb-4">Select a Bot</h3>

      <div className="w-full max-w-[220px] mx-auto rounded-[32px] border-[8px] border-slate-900 bg-slate-900 shadow-xl overflow-hidden">
        <div className="rounded-[24px] overflow-hidden bg-slate-100">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-1 bg-blue-900 text-white text-[11px]">
            <span className="font-medium">22:10</span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={11} />
              <Signal size={11} />
              <Wifi size={11} />
              <BatteryFull size={13} />
            </span>
          </div>

          {/* bot header */}
          <div className="flex flex-col items-center gap-2 bg-blue-900 text-white pt-2 pb-4">
            <div className="h-11 w-11 rounded-full bg-white/90 flex items-center justify-center">
              <User size={20} className="text-blue-900" />
            </div>
            <span className="text-[13px] font-semibold">{botName}</span>
          </div>

          {/* chat body */}
          <div className="h-[340px] bg-blue-100/70" />
        </div>
      </div>
    </div>
  );
}