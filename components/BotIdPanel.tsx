'use client';

import { ChevronDown, Search, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import EmptyState from './EmptyState';

const COLUMNS = ['User Name', 'Brand Name', 'Bot Id', 'Gateway', 'Status', 'Created At', 'Actions'];

export default function BotIdPanel() {
  const [pageSize, setPageSize] = useState('10');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      {/* toolbar */}
      <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-4 flex-wrap">
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
              placeholder="Search by Assistant ID / Bot ID / User Name"
              className="w-80 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </div>

        <button className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark transition-colors text-white text-[13px] font-semibold rounded-lg px-4 py-2.5">
          <LayoutGrid size={14} />
          Add Bot Id
        </button>
      </div>

      {/* table header */}
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-slate-50">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[13px] font-semibold text-slate-700 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
        </table>

        <EmptyState />
      </div>
    </div>
  );
}