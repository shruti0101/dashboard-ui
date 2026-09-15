'use client';

import { MessageCircle, FileText, ListChecks, Mail, FileBarChart2, Download } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const TABS = [
  { key: 'campaign', label: 'WA Campaign Report', icon: FileText },
  { key: 'logs', label: 'WA Message Logs', icon: ListChecks },
  { key: 'inbound', label: 'Inbound Messages', icon: Mail },
  { key: 'clicker', label: 'WA Clicker Report', icon: FileBarChart2 },
  { key: 'download', label: 'WA Report Download', icon: Download },
];

export default function ReportsHeader({ defaultTab = 'campaign' }: { defaultTab?: string }) {
  const [active, setActive] = useState(defaultTab);

  return (
    <div className="rounded-xl2 bg-gradient-to-r from-emerald-50 via-emerald-50/50 to-white overflow-hidden">
      <div className="px-6 pt-5 pb-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
          <MessageCircle size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-[19px] font-bold text-slate-800 leading-tight">WhatsApp Reports</h1>
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
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
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