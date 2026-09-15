import DashboardShell from '@/components/DashboardShell';
import UtilityRail from '@/components/UtilityRail';
import TemplateToolbar from '@/components/TemplateToolbar';
import TemplateTable from '@/components/TemplateTable';

export default function TemplatesPage() {
  return (
    <DashboardShell
      activeHref="/whatsapp-app/templates"
      rail={<UtilityRail defaultActive="templates" />}
    >
      <TemplateToolbar />
      <TemplateTable />
    </DashboardShell>
  );
}