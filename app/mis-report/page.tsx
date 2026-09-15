import DashboardShell from '@/components/DashboardShell';
import ChannelTabs from '@/components/ChannelTabs';
import MisReportHeader from '@/components/MisReportHeader';
import MisFilterBar from '@/components/MisFilterBar';
import MisStatCards from '@/components/MisStatCards';
import MisReportTable from '@/components/MisReportTable';

export default function MisReportPage() {
  return (
    <DashboardShell activeHref="/mis-report">
      <ChannelTabs defaultChannel="whatsapp" />
      <MisReportHeader channelLabel="WhatsApp" />
      <MisFilterBar />
      <MisStatCards />
      <MisReportTable />
    </DashboardShell>
  );
}
