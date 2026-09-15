import { GitBranch, PlusCircle, MessageCircle, MessageSquare } from 'lucide-react';

export default function FlowAutomationHero() {
  return (
    <div
      className="rounded-xl2 border border-slate-200 overflow-hidden bg-gradient-to-r from-emerald-50 via-sky-50 to-indigo-50"
      style={{
        backgroundImage:
          'radial-gradient(rgba(100,116,139,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(209,250,229,0.6), rgba(224,242,254,0.5), rgba(224,231,255,0.5))',
        backgroundSize: '16px 16px, 100% 100%',
      }}
    >
      <div className="px-6 pt-6 pb-5 flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shrink-0">
            <GitBranch size={22} className="text-white" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-wide text-slate-500">
              OMNI CHANNEL &middot; FLOWS
            </span>
            <h1 className="text-[21px] font-bold text-slate-800 leading-tight mt-0.5">
              Flow Automation
            </h1>
            <p className="text-[13px] text-slate-500 mt-1 max-w-md">
              Build, trigger and manage conversational workflows for WhatsApp &amp; RCS
            </p>
          </div>
        </div>

        <button className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark transition-colors text-white text-[13.5px] font-semibold rounded-lg px-4 py-2.5">
          <PlusCircle size={15} />
          Create Workflow
        </button>
      </div>

      <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white/90 border border-slate-200 rounded-xl2 px-4 py-3.5">
          <div className="text-[22px] font-bold text-slate-800 leading-none">0</div>
          <div className="text-[11px] font-semibold tracking-wide text-slate-400 mt-1.5">
            TOTAL WORKFLOWS
          </div>
        </div>

        <div className="bg-white/90 border border-slate-200 rounded-xl2 px-4 py-3.5">
          <div className="text-[22px] font-bold text-slate-800 leading-none">0</div>
          <div className="text-[11px] font-semibold tracking-wide text-slate-400 mt-1.5">
            ACTIVE ON PAGE
          </div>
        </div>

        <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl2 px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
              <MessageCircle size={15} className="text-white" />
            </span>
            <div>
              <div className="text-[13px] font-semibold text-slate-800">WhatsApp</div>
              <div className="text-[11px] text-slate-500">Keyword-triggered chat flows</div>
            </div>
          </div>
          <span className="text-[18px] font-bold text-emerald-700">0</span>
        </div>

        <div className="bg-indigo-50/90 border border-indigo-200 rounded-xl2 px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center shrink-0">
              <MessageSquare size={15} className="text-white" />
            </span>
            <div>
              <div className="text-[13px] font-semibold text-slate-800">RCS</div>
              <div className="text-[11px] text-slate-500">Rich bot automation flows</div>
            </div>
          </div>
          <span className="text-[18px] font-bold text-brand">0</span>
        </div>
      </div>
    </div>
  );
}