'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DATA = [
  { name: 'Sent', value: 98, color: '#64748B' },
  { name: 'Delivered', value: 95, color: '#17B26A' },
  { name: 'Read', value: 68, color: '#4F5FE0' },
  { name: 'Failed', value: 2, color: '#F04438' },
];

export default function StatusDistributionChart() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 p-5 h-full">
      <h2 className="text-[15px] font-semibold text-slate-800">Status distribution</h2>
      <p className="text-[12.5px] text-slate-500 mt-0.5">Share of messages by delivery status</p>

      <div className="relative h-[280px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={100}
              paddingAngle={3}
              cornerRadius={4}
              startAngle={90}
              endAngle={450}
              label={({ name, value, cx, cy, midAngle, outerRadius }) => {
                const RAD = Math.PI / 180;
                const radius = outerRadius + 26;
                const x = cx + radius * Math.cos(-midAngle * RAD);
                const y = cy + radius * Math.sin(-midAngle * RAD);
                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                    className="fill-slate-700"
                  >
                    <tspan x={x} dy="-0.3em" className="text-[12px] font-semibold">
                      {name}
                    </tspan>
                    <tspan x={x} dy="1.3em" className="text-[11px] fill-slate-400">
                      {value}%
                    </tspan>
                  </text>
                );
              }}
              labelLine={{ stroke: '#CBD5E1', strokeWidth: 1 }}
            >
              {DATA.map((d) => (
                <Cell key={d.name} fill={d.color} stroke="#fff" strokeWidth={2} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-5 mt-1 flex-wrap">
        {DATA.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 text-[12.5px] text-slate-500">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
            {d.name}
          </div>
        ))}
      </div>
    </div>
  );
}
