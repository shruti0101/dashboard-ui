import { ArrowLeft, User, BadgeCheck, Info } from 'lucide-react';

export default function PhoneMockup({
  name = 'Jodhpur',
  phone = '+918107838769',
}: {
  name?: string;
  phone?: string;
}) {
  return (
    <div className="w-[240px] rounded-[36px] border-[8px] border-slate-900 bg-slate-900 shadow-xl overflow-hidden shrink-0">
      <div className="rounded-[28px] overflow-hidden bg-[#EDE3D8] relative">
        {/* notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-900 rounded-b-2xl z-10" />

        {/* header */}
        <div className="bg-emerald-700 text-white px-4 pt-8 pb-4 flex items-center gap-2">
          <ArrowLeft size={16} />
          <span className="text-[13px] font-semibold">Business Info</span>
        </div>

        {/* profile */}
        <div className="flex flex-col items-center pt-6 pb-4 px-4">
          <div className="h-16 w-16 rounded-full bg-slate-300 flex items-center justify-center mb-2">
            <User size={26} className="text-slate-500" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[14px] font-semibold text-slate-800">{name}</span>
            <BadgeCheck size={14} className="text-emerald-600 fill-emerald-100" />
          </div>
          <span className="text-[12px] text-slate-500 mt-0.5">{phone}</span>
        </div>

        {/* info card */}
        <div className="mx-3 bg-white rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-700">Other</span>
            <Info size={13} className="text-slate-400" />
          </div>
          <span className="text-[10px] text-slate-400 tracking-wide">OTHER</span>
        </div>

        <div className="mx-3 mb-6 h-8 bg-white rounded-md" />
      </div>
    </div>
  );
}
