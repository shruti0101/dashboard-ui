'use client';

import { Menu, ArrowLeft, Clock, Wallet, Bell, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function useClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Topbar() {
  const time = useClock();

  return (
    <header className="h-[64px] bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button className="text-slate-500 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100">
          <Menu size={20} />
        </button>

        <button className="hidden sm:flex items-center gap-1.5 text-[13px] font-medium text-slate-600 border border-slate-200 rounded-full px-3.5 py-1.5 hover:bg-slate-50">
          <ArrowLeft size={14} />
          Go Back
        </button>

        <div className="flex items-center gap-1.5 text-[12px] font-medium border border-brand/30 bg-brand-light text-brand rounded-full px-3 py-1.5">
          <Clock size={13} />
          <span className="text-[10px] font-semibold tracking-wide text-brand/70">NOW</span>
          <span className="tabular-nums">{time || '--:--:-- --'}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 bg-brand text-white rounded-full pl-3 pr-3.5 py-1.5 text-[13px] font-semibold">
          <Wallet size={14} />
          <span className="text-[11px] font-medium opacity-80">IN</span>
          <span>₹9,941.95</span>
        </div>

        <button className="relative text-slate-500 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] leading-none rounded-full h-4 w-4 flex items-center justify-center font-semibold">
            0
          </span>
        </button>

        <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-slate-100">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-brand to-indigo-400 flex items-center justify-center text-white text-xs font-semibold">
            J
          </span>
          <span className="text-[13px] font-medium text-slate-700 hidden md:inline">jodhpur</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}
