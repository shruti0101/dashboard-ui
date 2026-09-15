'use client';

import { ChevronDown, ListFilter } from 'lucide-react';
import { useState } from 'react';

export default function MisFilterBar() {
  const [from, setFrom] = useState('2026-09-08');
  const [to, setTo] = useState('2026-09-15');
  const [template, setTemplate] = useState('');

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[170px]">
          <select className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] text-slate-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option>Select WABA ID</option>
          </select>
          <ChevronDown
            size={15}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        <div className="relative flex-1 min-w-[170px]">
          <select className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] text-slate-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option>Select Number</option>
          </select>
          <ChevronDown
            size={15}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="flex-1 min-w-[170px] border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />

        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="flex-1 min-w-[170px] border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />

        <div className="relative flex-1 min-w-[170px]">
          <select className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] text-slate-500 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option>Select Category</option>
          </select>
          <ChevronDown
            size={15}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        <input
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Enter Template Name"
          className="flex-1 min-w-[170px] border border-slate-200 rounded-lg px-3 py-2.5 text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div className="flex justify-end mt-3">
        <button className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark transition-colors text-white text-[13.5px] font-semibold rounded-lg px-6 py-2.5">
          <ListFilter size={14} />
          Apply
        </button>
      </div>
    </div>
  );
}
