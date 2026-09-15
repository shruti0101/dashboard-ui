import DashboardShell from '@/components/DashboardShell';
import RcsReportsHeader from '@/components/RcsReportsHeader';
import ReportToolbar from '@/components/ReportToolbar';
import RcsReportTable from '@/components/RcsReportTable';

export default function RcsReportPage() {
  return (
    <DashboardShell activeHref="/rcs-app/report">
      <RcsReportsHeader defaultTab="campaign" />
      <ReportToolbar />
      <RcsReportTable />
    </DashboardShell>
  );
}