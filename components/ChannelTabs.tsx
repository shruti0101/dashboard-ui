'use client';

import { MessageCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const CHANNELS = [
  { key: 'whatsapp', label: 'Whatsapp', icon: MessageCircle },
  { key: 'rcs', label: 'RCS', icon: MessageSquare },
];

export default function ChannelTabs({
  defaultChannel = 'whatsapp',
}: {
  defaultChannel?: string;
}) {
  const [active, setActive] = useState(defaultChannel);

  return (
    <div className="flex items-center gap-2">
      {CHANNELS.map((c) => {
        const Icon = c.icon;
        const isActive = active === c.key;
        return (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={clsx(
              'flex items-center gap-2 rounded-lg px-4 py-2 text-[13.5px] font-semibold transition-colors',
              isActive
                ? 'bg-brand text-white shadow-sm'
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
            )}
          >
            <span
              className={clsx(
                'h-5 w-5 rounded-full flex items-center justify-center',
                isActive ? 'bg-white/20' : 'bg-brand-light text-brand'
              )}
            >
              <Icon size={12} />
            </span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
