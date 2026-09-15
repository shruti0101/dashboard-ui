import { KeyRound, Code2, PlusCircle } from 'lucide-react';

export default function ApiKeyHero() {
  return (
    <div className="rounded-xl2 bg-gradient-to-r from-indigo-100 via-indigo-50/70 to-white px-6 py-6 flex items-start justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-brand flex items-center justify-center shrink-0">
          <KeyRound size={22} className="text-white" />
        </div>
        <div>
          <span className="text-[11px] font-semibold tracking-wide text-slate-500">
            DEVELOPER &middot; ACCESS
          </span>
          <h1 className="text-[21px] font-bold text-slate-800 leading-tight mt-0.5">
            Generate API Key
          </h1>
          <p className="text-[13px] text-slate-500 mt-1 max-w-lg">
            Create, Rotate, And Govern API Keys With IP Allowlists And Priority
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-semibold rounded-lg px-4 py-2.5 hover:bg-slate-50">
          <Code2 size={14} />
          Read API Docs
        </button>
        <button className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark transition-colors text-white text-[13px] font-semibold rounded-lg px-4 py-2.5">
          <PlusCircle size={14} />
          Add API Key
        </button>
      </div>
    </div>
  );
}