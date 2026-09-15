import { BarChart3 } from 'lucide-react';
import DashboardShell from '@/components/DashboardShell';
import Breadcrumb from '@/components/Breadcrumb';
import ComingSoonPanel from '@/components/ComingSoonPanel';

export default function WhatsappReportPage() {
  return (
    <DashboardShell activeHref="/whatsapp-app/report">
      <Breadcrumb items={['Whatsapp', 'Report']} />
      <ComingSoonPanel
        icon={BarChart3}
        title="Whatsapp Report"
        description="Send over a screenshot of this page and I'll build it out to match, same as Create Campaign."
      />
    </DashboardShell>
  );
}
