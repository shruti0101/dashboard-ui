'use client';

import { List, BookUser, FileUp, Trash2, ClipboardPaste } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

type Source = 'manual' | 'saved' | 'upload';

const SOURCES: {
  key: Source;
  icon: React.ElementType;
  title: string;
  description: string;
}[] = [
  { key: 'manual', icon: List, title: 'Manual Numbers', description: 'Paste or type phone numbers' },
  { key: 'saved', icon: BookUser, title: 'Saved Contacts', description: 'Groups, categories, or tags' },
  { key: 'upload', icon: FileUp, title: 'Upload File', description: 'CSV / Excel audience list' },
];

export default function AudienceSourceCard() {
  const [source, setSource] = useState<Source>('manual');
  const [numbers, setNumbers] = useState('');

  const totalNumbers = numbers
    .split('\n')
    .map((n) => n.trim())
    .filter(Boolean).length;

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-6">
      <h2 className="text-[15px] font-semibold text-slate-800">Audience Source</h2>
      <p className="text-[13px] text-slate-500 mt-0.5 mb-4">Pick one method to load recipients</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {SOURCES.map((s) => {
          const Icon = s.icon;
          const isActive = source === s.key;
          return (
            <button
              key={s.key}
              onClick={() => setSource(s.key)}
              className={clsx(
                'flex items-start gap-3 rounded-xl2 border-2 p-4 text-left transition-colors',
                isActive
                  ? 'border-brand bg-brand-light/60'
                  : 'border-slate-200 hover:bg-slate-50'
              )}
            >
              <span
                className={clsx(
                  'h-9 w-9 rounded-lg flex items-center justify-center shrink-0',
                  isActive ? 'bg-brand text-white' : 'bg-slate-100 text-slate-500'
                )}
              >
                <Icon size={16} />
              </span>
              <span>
                <span className="block text-[13.5px] font-semibold text-slate-800">
                  {s.title}
                </span>
                <span className="block text-[12px] text-slate-500 mt-0.5">
                  {s.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <textarea
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter one number per line with country code (+91...)"
        rows={5}
        className="w-full border border-slate-200 rounded-lg px-3.5 py-3 text-[13.5px] text-slate-600 placeholder:text-slate-400 resize-y focus:outline-none focus:ring-2 focus:ring-brand/30"
      />

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 flex items-center justify-center bg-rose-500 hover:bg-rose-600 rounded-lg text-white">
            <Trash2 size={15} />
          </button>
          <button
            onClick={() => setNumbers('')}
            className="h-9 w-9 flex items-center justify-center bg-slate-800 hover:bg-slate-900 rounded-lg text-white"
          >
            <ClipboardPaste size={15} />
          </button>
        </div>
        <span className="text-[13px] text-slate-600">
          <span className="font-bold text-slate-800">{totalNumbers}</span>{' '}
          <span className="text-brand font-semibold">NUMBERS</span>
        </span>
      </div>
    </div>
  );
}