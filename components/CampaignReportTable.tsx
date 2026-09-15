import { User, Info, Tag, RefreshCw, Wallet, Settings, Copy, CalendarDays, Eye, Download } from 'lucide-react';

type Campaign = {
  user: string;
  title: string;
  messageId: string;
  phoneId: string;
  senderNumber: string;
  wabaId: string;
  date: string;
  category: string;
  template: string;
  campaignType: string;
  statusCount: number;
  cost: string;
};

const CAMPAIGNS: Campaign[] = [
  {
    user: 'jodhpur',
    title: 'congratulation 87',
    messageId: '118b8da3-4215-4ddd-9447-6c2e89a4dced',
    phoneId: '1346836911843952',
    senderNumber: '+918107838769',
    wabaId: '1604344364760755',
    date: 'Sep 14, 2026, 12:12:08 PM',
    category: 'Utility',
    template: 'info_update_02',
    campaignType: 'whatsapp-compose',
    statusCount: 434,
    cost: '716.100',
  },
  {
    user: 'jodhpur',
    title: 'congratulation 87',
    messageId: '22e9606b-f89d-4cda-b360-0663ab115c42',
    phoneId: '1346836911843952',
    senderNumber: '+918107838769',
    wabaId: '1604344364760755',
    date: 'Sep 14, 2026, 12:09:32 PM',
    category: 'Utility',
    template: 'info_update_02',
    campaignType: 'whatsapp-compose',
    statusCount: 1,
    cost: '1.650',
  },
  {
    user: 'jodhpur',
    title: 'congratulation 98 bjp',
    messageId: '873b6a71-6908-49fb-ae5f-ae92306f82dd',
    phoneId: '1346836911843952',
    senderNumber: '+918107838769',
    wabaId: '1604344364760755',
    date: 'Sep 14, 2026, 11:49:59 AM',
    category: 'Utility',
    template: 'info_update_01',
    campaignType: 'whatsapp-compose',
    statusCount: 1,
    cost: '1.650',
  },
  {
    user: 'jodhpur',
    title: 'tesr',
    messageId: 'ab161752-bdcd-42e3-a3a0-120a18215ae1',
    phoneId: '1281380785062560',
    senderNumber: '+918107838769',
    wabaId: '944283632020401',
    date: 'Sep 13, 2026, 7:18:01 AM',
    category: 'Utility',
    template: 'info_update_inhg',
    campaignType: 'whatsapp-compose',
    statusCount: 1,
    cost: '1.650',
  },
  {
    user: 'jodhpur',
    title: 'jodhpur test',
    messageId: '94d32ef6-f777-46c4-bfae-88350bcc788c',
    phoneId: '1281380785062560',
    senderNumber: '+918107838769',
    wabaId: '944283632020401',
    date: 'Sep 12, 2026, 6:40:14 PM',
    category: 'Utility',
    template: 'info_update_inhg',
    campaignType: 'whatsapp-compose',
    statusCount: 1,
    cost: '1.650',
  },
];

function CopyValue({ value, mono = true }: { value: string; mono?: boolean }) {
  return (
    <span
      className={
        'inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-[11.5px] text-slate-600 ' +
        (mono ? 'font-mono' : '')
      }
    >
      {value}
      <Copy size={11} className="text-slate-400" />
    </span>
  );
}

const COLUMNS = [
  { label: 'USER', icon: User },
  { label: 'PRIMARY', icon: Info },
  { label: 'CATEGORY', icon: Tag },
  { label: 'STATUS', icon: RefreshCw },
  { label: 'COST', icon: Wallet },
  { label: 'ACTIONS', icon: Settings },
];

export default function CampaignReportTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-emerald-50/70">
              {COLUMNS.map((col) => {
                const Icon = col.icon;
                return (
                  <th
                    key={col.label}
                    className="px-4 py-3 text-[11px] font-semibold tracking-wide text-emerald-700 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1.5">
                      <Icon size={12} />
                      {col.label}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {CAMPAIGNS.map((c, i) => (
              <tr
                key={i}
                className="border-b border-slate-100 last:border-b-0 border-l-2 border-l-emerald-400 align-top hover:bg-slate-50/60"
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                    <span className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <User size={13} />
                    </span>
                    {c.user}
                  </span>
                </td>

                <td className="px-4 py-4 min-w-[280px]">
                  <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-800">
                    {c.title}
                    <Copy size={11} className="text-slate-400" />
                  </span>

                  <div className="mt-2 space-y-1.5">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        MESSAGE ID
                      </span>
                      <CopyValue value={c.messageId} />
                    </div>
                    <div className="text-[11.5px] text-slate-500">
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        PHONE ID
                      </span>
                      {c.phoneId}
                    </div>
                    <div className="text-[11.5px] text-slate-500">
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        SENDER NUMBER
                      </span>
                      {c.senderNumber}
                    </div>
                    <div className="text-[11.5px] text-slate-500">
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        WABA ID
                      </span>
                      {c.wabaId}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11.5px] text-slate-400">
                      <CalendarDays size={12} />
                      {c.date}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 min-w-[220px]">
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        CATEGORY
                      </span>
                      <span className="inline-block bg-indigo-50 text-indigo-600 text-[11px] font-semibold rounded px-2 py-0.5">
                        {c.category}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        TEMPLATE
                      </span>
                      <CopyValue value={c.template} />
                    </div>
                    <div className="text-[11.5px] text-slate-500">
                      <span className="text-[10px] font-semibold tracking-wide text-slate-400 mr-1.5">
                        CAMPAIGN TYPE
                      </span>
                      {c.campaignType}
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 rounded-full px-2.5 py-1 text-[12px] font-semibold">
                    <RefreshCw size={11} />
                    {c.statusCount}
                    <span className="text-slate-300">|</span>
                    <span className="text-brand">VIEW</span>
                  </span>
                </td>

                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 border border-slate-200 rounded-md px-2.5 py-1 text-[12.5px] font-semibold text-slate-700">
                    {c.cost}
                    <span className="text-[10px] font-bold text-slate-400 ml-0.5">INR</span>
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-1.5">
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-brand bg-brand-light hover:bg-brand/10">
                      <Eye size={13} />
                    </button>
                    <button className="h-7 w-7 rounded-md flex items-center justify-center text-emerald-600 bg-emerald-50 hover:bg-emerald-100">
                      <Download size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}