'use client';

import { ChevronLeft, Phone, Users, MessageSquare, List, Bookmark } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const RAIL_ITEMS = [
  { key: 'contacts', icon: Phone },
  { key: 'groups', icon: Users },
  { key: 'broadcast', icon: MessageSquare },
  { key: 'lists', icon: List },
  { key: 'saved', icon: Bookmark },
];

export default function SectionRail({
  defaultActive = 'contacts',
}: {
  defaultActive?: string;
}) {
  const [active, setActive] = useState(defaultActive);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="hidden md:flex w-[56px] shrink-0 flex-col items-center gap-2 bg-white border-r border-slate-200 py-3">
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="h-8 w-8 rounded-lg bg-brand text-white flex items-center justify-center mb-1"
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
              'h-9 w-9 rounded-lg flex items-center justify-center transition-colors',
              isActive
                ? 'bg-brand text-white'
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
            )}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
