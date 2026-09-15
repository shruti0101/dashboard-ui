'use client';

import { Search, Radio, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactsToolbar() {
  const [perPage, setPerPage] = useState('5');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-3">
        <div className="relative">
          <select
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            className="appearance-none border border-slate-200 rounded-lg pl-3 pr-7 py-2 text-[13px] font-medium text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            <option>5</option>
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
            placeholder="Search contacts..."
            className="w-64 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <button className="flex items-center gap-1.5 text-[13px] font-semibold text-brand border border-brand/30 bg-brand-light rounded-lg px-3.5 py-2 hover:bg-brand/10">
        <Radio size={14} />
        Broadcaster
      </button>
    </div>
  );
}
