'use client';

import { Radio, FileText, ListChecks, Mail, Download } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const TABS = [
  { key: 'campaign', label: 'RCS Campaign Report', icon: FileText },
  { key: 'logs', label: 'RCS Number Logs', icon: ListChecks },
  { key: 'inbound', label: 'RCS Inbound Message', icon: Mail },
  { key: 'download', label: 'RCS Report Download', icon: Download },
];

export default function RcsReportsHeader({ defaultTab = 'campaign' }: { defaultTab?: string }) {
  const [active, setActive] = useState(defaultTab);

  return (
    <div className="rounded-xl2 bg-gradient-to-r from-indigo-100 via-indigo-50/70 to-white overflow-hidden">
      <div className="px-6 pt-5 pb-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-brand flex items-center justify-center shrink-0">
          <Radio size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-[19px] font-bold text-slate-800 leading-tight">RCS Reports</h1>
          <p className="text-[13px] text-slate-500 mt-0.5">
            Campaign Delivery, Message Logs, Inbound &amp; Exports
          </p>
        </div>
      </div>

      <div className="px-6 pb-5 flex items-center gap-2 flex-wrap">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-colors border',
                isActive
                  ? 'bg-brand border-brand text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              )}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}