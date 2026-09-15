import { User } from 'lucide-react';
import { Pencil, Settings, Trash2, MoreVertical } from 'lucide-react';
import clsx from 'clsx';
import SimplePagination from './SimplePagination';

type MetaNumber = {
  user: string;
  displayName: string;
  connected: boolean;
  phone: string;
  countryCode: string;
  country: string;
  quality: 'GREEN' | 'YELLOW' | 'RED';
  tier: string;
  wabaId: string;
  phoneNumberId: string;
  businessId: string;
  createdAt: string;
  onboardedAt: string;
  metaSyncAt: string;
};

const NUMBERS: MetaNumber[] = [
  {
    user: 'jodhpur',
    displayName: 'Thank you',
    connected: true,
    phone: '+918107838769',
    countryCode: 'IN',
    country: 'India',
    quality: 'GREEN',
    tier: 'TIER_100K/24hr',
    wabaId: '160434436476075',
    phoneNumberId: '134683691184395',
    businessId: '157894236656282',
    createdAt: 'Sep 10, 2026',
    onboardedAt: 'Sep 10, 2026',
    metaSyncAt: 'Sep 14, 2026, 10:11:29 AM',
  },
];

const QUALITY_DOT: Record<MetaNumber['quality'], string> = {
  GREEN: 'bg-emerald-500',
  YELLOW: 'bg-amber-500',
  RED: 'bg-rose-500',
};

const QUALITY_TEXT: Record<MetaNumber['quality'], string> = {
  GREEN: 'text-emerald-600',
  YELLOW: 'text-amber-600',
  RED: 'text-rose-600',
};

const COLUMNS = [
  'USER INFO',
  'DISPLAY NAME',
  'PHONE NUMBER',
  'QUALITY',
  'INFO',
  'META TIMELINE',
  'ACTIONS',
];

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="leading-tight">
      <div className="text-[10px] font-semibold tracking-wide text-slate-400">{label}</div>
      <div className="text-[12.5px] font-medium text-slate-700">{value}</div>
    </div>
  );
}

function TimelineRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="leading-tight">
      <div className="text-[10px] font-semibold tracking-wide text-slate-400">{label}</div>
      <div className="text-[12.5px] font-medium text-slate-700">{value}</div>
    </div>
  );
}

export default function MetaNumbersTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-slate-50">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[11.5px] font-semibold tracking-wide text-slate-500 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {NUMBERS.map((n) => (
              <tr key={n.phone} className="border-b border-slate-50 last:border-b-0 align-top hover:bg-slate-50/60">
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-2 text-[13.5px] font-semibold text-slate-700">
                    <span className="h-8 w-8 rounded-full bg-brand-light text-brand flex items-center justify-center">
                      <User size={14} />
                    </span>
                    {n.user}
                  </span>
                </td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-[13.5px] font-semibold text-slate-700">{n.displayName}</div>
                  {n.connected && (
                    <span className="inline-block mt-1 text-[10.5px] font-semibold tracking-wide text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-0.5">
                      CONNECTED
                    </span>
                  )}
                </td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-[13.5px] font-semibold text-slate-700">{n.phone}</div>
                  <div className="text-[12px] text-slate-500 mt-0.5">
                    <span className="font-semibold text-slate-400 mr-1">{n.countryCode}</span>
                    {n.country}
                  </div>
                </td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={clsx(
                      'inline-flex items-center gap-1.5 text-[12px] font-semibold',
                      QUALITY_TEXT[n.quality]
                    )}
                  >
                    <span className={clsx('h-1.5 w-1.5 rounded-full', QUALITY_DOT[n.quality])} />
                    {n.quality}
                  </span>
                  <div className="text-[11.5px] text-slate-400 mt-1">{n.tier}</div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col gap-2">
                    <InfoRow label="WABAID" value={n.wabaId} />
                    <InfoRow label="PHONENUMBERID" value={n.phoneNumberId} />
                    <InfoRow label="BUSINESSID" value={n.businessId} />
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col gap-2">
                    <TimelineRow label="CREATED" value={n.createdAt} />
                    <TimelineRow label="ONBOARDED" value={n.onboardedAt} />
                    <TimelineRow label="META SYNC" value={n.metaSyncAt} />
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5">
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-brand bg-brand-light hover:bg-brand/10">
                      <Pencil size={13} />
                    </button>
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-slate-500 bg-slate-100 hover:bg-slate-200">
                      <Settings size={13} />
                    </button>
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-rose-600 bg-rose-50 hover:bg-rose-100">
                      <Trash2 size={13} />
                    </button>
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-slate-400 hover:bg-slate-100">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SimplePagination totalPages={1} />
    </div>
  );
}