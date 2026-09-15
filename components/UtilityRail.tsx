'use client';

import { ChevronLeft, List, CheckSquare, Ban, Database, Image as ImageIcon, Archive } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const RAIL_ITEMS = [
  { key: 'templates', icon: List },
  { key: 'approved', icon: CheckSquare },
  { key: 'rejected', icon: Ban },
  { key: 'data', icon: Database },
  { key: 'media', icon: ImageIcon },
  { key: 'archive', icon: Archive },
];

export default function UtilityRail({
  defaultActive = 'templates',
}: {
  defaultActive?: string;
}) {
  const [active, setActive] = useState(defaultActive);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="hidden md:flex w-[64px] shrink-0 flex-col items-center gap-2 bg-slate-50 border-r border-slate-200 py-3">
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="h-9 w-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-2 hover:bg-emerald-800"
      >
        <ChevronLeft size={16} className={clsx('transition-transform', collapsed && 'rotate-180')} />
      </button>

      {RAIL_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={clsx(
              'h-10 w-10 rounded-xl flex items-center justify-center transition-colors',
              isActive
                ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200'
                : 'text-slate-400 hover:bg-white hover:text-slate-600'
            )}
          >
            <Icon size={17} />
          </button>
        );
      })}
    </div>
  );
}