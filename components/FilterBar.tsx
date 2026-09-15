'use client';

import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
      <span className="text-[12px] font-medium text-slate-500">{label}</span>
      {children}
    </div>
  );
}

export default function FilterBar() {
  const [channel, setChannel] = useState('WHATSAPP');
  const [period, setPeriod] = useState('This Month');
  const [from, setFrom] = useState('09/01/2026 12:00 AM');
  const [to, setTo] = useState('09/30/2026 11:59 PM');

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-4">
      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-brand mb-3.5">
        <SlidersHorizontal size={13} />
        FILTERS
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <Field label="Channel">
          <div className="relative">
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13.5px] font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option>WHATSAPP</option>
              <option>SMS</option>
              <option>RCS</option>
              <option>EMAIL</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </Field>

        <Field label="Period">
          <div className="relative">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full appearance-none border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13.5px] font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Custom</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </Field>

        <Field label="From">
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </Field>

        <Field label="To">
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </Field>

        <button className="bg-brand hover:bg-brand-dark transition-colors text-white text-[13.5px] font-semibold rounded-lg px-8 py-2.5 min-w-[140px]">
          Apply
        </button>
      </div>
    </div>
  );
}
