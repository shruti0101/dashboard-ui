import DashboardShell from '@/components/DashboardShell';
import PageHeader from '@/components/PageHeader';
import FilterBar from '@/components/FilterBar';
import StatCards from '@/components/StatCards';
import StatusDistributionChart from '@/components/StatusDistributionChart';
import TrafficTrendsChart from '@/components/TrafficTrendsChart';

export default function DashboardPage() {
  return (
    <DashboardShell activeHref="/">
      <PageHeader />
      <FilterBar />
      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StatusDistributionChart />
        <TrafficTrendsChart />
      </div>
    </DashboardShell>
  );
}
