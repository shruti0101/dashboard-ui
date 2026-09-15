'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Download } from 'lucide-react';

// Daily message volume: mostly quiet, one big campaign spike around Sep 11,
// and a small blip around Sep 13-14 — matches the trend shape in the reference UI.
function buildData() {
  const days = Array.from({ length: 15 }, (_, i) => i + 1);
  const spike = (day: number, center: number, width: number, height: number) => {
    const d = day - center;
    return Math.max(0, height * Math.exp(-(d * d) / (2 * width * width)));
  };

  return days.map((day) => {
    const base = spike(day, 11, 1.1, 1);
    const small = spike(day, 13.5, 0.6, 1);
    return {
      date: `Sep ${day}`,
      Initiated: Math.round(7900 * base + 60 * small + 15),
      Sent: Math.round(7600 * base + 55 * small + 10),
      Delivered: Math.round(7300 * base + 50 * small + 8),
      Read: Math.round(4200 * base + 35 * small + 5),
      Failed: Math.round(180 * base + 6 * small + 1),
    };
  });
}

const DATA = buildData();

const SERIES = [
  { key: 'Initiated', color: '#F5A524' },
  { key: 'Sent', color: '#64748B' },
  { key: 'Delivered', color: '#17B26A' },
  { key: 'Failed', color: '#F04438' },
  { key: 'Read', color: '#4F5FE0' },
];

export default function TrafficTrendsChart() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 p-5 h-full">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-slate-800">Traffic trends</h2>
          <p className="text-[12.5px] text-slate-500 mt-0.5">Daily message volume by status</p>
        </div>
        <button className="text-slate-400 hover:text-slate-600 p-1">
          <Download size={16} />
        </button>
      </div>

      <div className="h-[300px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              {SERIES.map((s) => (
                <linearGradient key={s.key} id={`fill-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={s.color} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={s.color} stopOpacity={0.02} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} stroke="#EEF1F6" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              axisLine={{ stroke: '#EEF1F6' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : `${v}`)}
              label={{
                value: 'Messages',
                position: 'insideTopLeft',
                offset: 10,
                fontSize: 11,
                fill: '#94A3B8',
              }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 10,
                border: '1px solid #E2E8F0',
                fontSize: 12,
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="square"
              iconSize={9}
              wrapperStyle={{ fontSize: 12, color: '#475569', top: -6 }}
            />
            {SERIES.map((s) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={1.75}
                fill={`url(#fill-${s.key})`}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
