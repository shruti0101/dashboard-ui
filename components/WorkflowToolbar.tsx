'use client';

import { LayoutGrid, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

export default function WorkflowToolbar() {
  const [pageSize, setPageSize] = useState('10');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card px-4 py-3 flex items-center gap-3 flex-wrap">
      <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-700 whitespace-nowrap">
        <LayoutGrid size={15} className="text-brand" />
        Workflow Library
      </span>

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

      <div className="relative flex-1 min-w-[220px]">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by workflow name or key..."
          className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>
    </div>
  );
}