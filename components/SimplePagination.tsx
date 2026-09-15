'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function SimplePagination({ totalPages = 1 }: { totalPages?: number }) {
  const [page, setPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-end gap-1.5 px-4 py-3.5">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="text-[12.5px] font-medium text-slate-400 px-3 py-1.5 rounded-md hover:bg-slate-100 disabled:opacity-40"
      >
        « Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={clsx(
            'h-8 w-8 rounded-md text-[12.5px] font-semibold transition-colors',
            page === p ? 'bg-brand text-white' : 'text-slate-500 hover:bg-slate-100'
          )}
        >
          {p}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className="text-[12.5px] font-medium text-slate-500 px-3 py-1.5 rounded-md hover:bg-slate-100 disabled:opacity-40"
      >
        Next »
      </button>
    </div>
  );
}