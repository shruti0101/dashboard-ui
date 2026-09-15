'use client';

import { ChevronDown, X, List, Phone, FileText, ClipboardPaste, Trash2 } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

type NumbersTab = 'insert' | 'contacts' | 'upload';

export default function CampaignForm() {
  const [campaignName, setCampaignName] = useState('');
  const [numbersTab, setNumbersTab] = useState<NumbersTab>('insert');
  const [numbers, setNumbers] = useState('');

  const totalNumbers = numbers
    .split(/[\n,]/)
    .map((n) => n.trim())
    .filter(Boolean).length;

  return (
    <div className="bg-white border border-slate-200 rounded-xl2 shadow-card p-8">
      {/* From ID + Campaign Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[13px] font-medium text-slate-700">
              From ID<span className="text-rose-500">*</span>
            </label>
            <button className="text-[12.5px] font-medium text-brand hover:underline">
              Register a new number ?
            </button>
          </div>
          <div className="relative">
            <div className="w-full flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-700">
              <span>Jodhpur - +918107838769</span>
              <span className="flex items-center gap-2 text-slate-400">
                <X size={14} className="hover:text-slate-600 cursor-pointer" />
                <ChevronDown size={15} />
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="text-[13px] font-medium text-slate-700 block mb-1.5">
            Campaign Name<span className="text-rose-500">*</span>
          </label>
          <input
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            placeholder="Input Campaign Name"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      {/* Numbers panel */}
      <div className="border border-slate-200 rounded-xl2 overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <button
            onClick={() => setNumbersTab('insert')}
            className={clsx(
              'flex-1 flex items-center justify-center gap-2 py-3.5 text-[13.5px] font-semibold transition-colors',
              numbersTab === 'insert'
                ? 'bg-emerald-700 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            )}
          >
            <List size={15} />
            Insert Number Here
          </button>
          <button
            onClick={() => setNumbersTab('contacts')}
            className={clsx(
              'flex-1 flex items-center justify-center gap-2 py-3.5 text-[13.5px] font-medium transition-colors',
              numbersTab === 'contacts' ? 'text-slate-800' : 'text-slate-500 hover:bg-slate-50'
            )}
          >
            <Phone size={15} />
            Get Contacts
          </button>
          <button
            onClick={() => setNumbersTab('upload')}
            className={clsx(
              'flex-1 flex items-center justify-center gap-2 py-3.5 text-[13.5px] font-medium transition-colors',
              numbersTab === 'upload' ? 'text-slate-800' : 'text-slate-500 hover:bg-slate-50'
            )}
          >
            <FileText size={15} />
            Upload file
          </button>
        </div>

        <div className="p-4">
          <textarea
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Insert numbers here with Country Code (Mandatory Ex (+91))"
            rows={5}
            className="w-full border border-slate-200 rounded-lg px-3.5 py-3 text-[13.5px] text-slate-600 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-brand/30"
          />

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md text-brand hover:bg-slate-50">
                <ClipboardPaste size={14} />
              </button>
              <button
                onClick={() => setNumbers('')}
                className="h-8 w-8 flex items-center justify-center border border-slate-200 rounded-md text-brand hover:bg-slate-50"
              >
                <Trash2 size={14} />
              </button>
            </div>
            <span className="text-[13px] text-slate-500">Total Numbers: {totalNumbers}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-brand hover:bg-brand-dark transition-colors text-white text-[13.5px] font-semibold rounded-lg px-8 py-2.5">
          Next
        </button>
      </div>
    </div>
  );
}
