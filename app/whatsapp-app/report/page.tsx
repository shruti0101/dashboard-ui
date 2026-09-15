import DashboardShell from '@/components/DashboardShell';
import ReportsHeader from '@/components/ReportsHeader';
import ReportToolbar from '@/components/ReportToolbar';
import CampaignReportTable from '@/components/CampaignReportTable';

export default function WhatsappReportPage() {
  return (
    <DashboardShell activeHref="/whatsapp-app/report">
      <ReportsHeader defaultTab="campaign" />
      <ReportToolbar />
      <CampaignReportTable />
    </DashboardShell>
  );
}