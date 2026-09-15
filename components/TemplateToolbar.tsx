'use client';

import { Search, ChevronDown, X, RotateCw, RefreshCw, MessageSquarePlus } from 'lucide-react';
import { useState } from 'react';

export default function TemplateToolbar() {
  const [pageSize, setPageSize] = useState('10');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-3">
        <div className="relative">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            className="appearance-none border border-slate-200 rounded-lg pl-3 pr-7 py-2 text-[13px] font-medium text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <ChevronDown
            size={13}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-56 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center justify-between gap-2 border border-slate-200 rounded-lg pl-3 pr-2 py-2 text-[13px] text-slate-700 min-w-[150px]">
          <span>Jodhpur</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <X size={13} className="hover:text-slate-600 cursor-pointer" />
            <ChevronDown size={14} />
          </span>
        </div>

        <button className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 transition-colors text-white text-[13px] font-semibold rounded-lg px-3.5 py-2">
          <RotateCw size={14} />
          Sync
        </button>

        <button className="flex items-center justify-center h-[38px] w-[38px] border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
          <RefreshCw size={14} />
        </button>

        <button className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 transition-colors text-white text-[13px] font-semibold rounded-lg px-3.5 py-2">
          <MessageSquarePlus size={14} />
          Add WA Template
        </button>
      </div>
    </div>
  );
}