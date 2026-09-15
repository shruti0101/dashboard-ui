import { Infinity as InfinityIcon, PlusCircle, Link2 } from 'lucide-react';

export default function MetaHero() {
  return (
    <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-6 flex items-center justify-between flex-wrap gap-4">
      {/* decorative background icon */}
      <InfinityIcon
        size={220}
        strokeWidth={1}
        className="absolute -right-6 -bottom-10 text-white/10 pointer-events-none"
      />

      <div className="flex items-center gap-4 relative z-10">
        <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
          <InfinityIcon size={22} className="text-white" />
        </div>
        <div>
          <span className="text-[11px] font-semibold tracking-wide text-blue-100">
            META &middot; CLOUD API
          </span>
          <h1 className="text-[21px] font-bold text-white leading-tight mt-0.5">
            Meta Business Numbers
          </h1>
          <p className="text-[13px] text-blue-100 mt-1 max-w-md">
            Onboard, Sync, And Govern Cloud API Phone Numbers Across Meta
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 relative z-10">
        <button className="flex items-center gap-1.5 bg-white text-blue-700 text-[13px] font-semibold rounded-lg px-4 py-2.5 hover:bg-blue-50">
          <PlusCircle size={15} />
          Add Number
        </button>
        <button className="flex items-center gap-1.5 bg-white/15 text-white text-[13px] font-semibold rounded-lg px-4 py-2.5 hover:bg-white/25 border border-white/30">
          <Link2 size={15} />
          Connect Meta
        </button>
      </div>
    </div>
  );
}