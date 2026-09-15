'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

function Select({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13.5px] text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30">
        <option>{placeholder}</option>
      </select>
      <ChevronDown
        size={15}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
      />
    </div>
  );
}

export default function CampaignSetupCard() {
  const [campaignName, setCampaignName] = useState('');
  const [excludeBlocked, setExcludeBlocked] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-6">
      <h2 className="text-[15px] font-semibold text-slate-800">Campaign Setup</h2>
      <p className="text-[13px] text-slate-500 mt-0.5 mb-5">
        Gateway, bot identity, and message template
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className="text-[13px] font-semibold text-slate-700 block mb-1.5">Gateway</label>
          <Select placeholder="Select gateway" />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-slate-700 block mb-1.5">
            Campaign Name
          </label>
          <input
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Enter campaign name"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div>
          <label className="text-[13px] font-semibold text-slate-700 block mb-1.5">Bot ID</label>
          <Select placeholder="Select bot ID" />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-slate-700 block mb-1.5">Template</label>
          <Select placeholder="Select template" />
        </div>
      </div>

      <button
        onClick={() => setExcludeBlocked((v) => !v)}
        className="w-full flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 mt-5 hover:bg-slate-50"
      >
        <span
          className={clsx(
            'relative h-5 w-9 rounded-full transition-colors shrink-0',
            excludeBlocked ? 'bg-brand' : 'bg-slate-300'
          )}
        >
          <span
            className={clsx(
              'absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform',
              excludeBlocked ? 'translate-x-[18px]' : 'translate-x-0.5'
            )}
          />
        </span>
        <span className="text-[13.5px] font-semibold text-slate-700">Exclude Blocked</span>
      </button>
    </div>
  );
}