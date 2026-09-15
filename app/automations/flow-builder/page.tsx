import DashboardShell from '@/components/DashboardShell';
import FlowAutomationHero from '@/components/FlowAutomationHero';
import WorkflowToolbar from '@/components/WorkflowToolbar';
import WorkflowTable from '@/components/WorkflowTable';

export default function FlowBuilderPage() {
  return (
    <DashboardShell activeHref="/automations/flow-builder">
      <FlowAutomationHero />
      <WorkflowToolbar />
      <WorkflowTable />
    </DashboardShell>
  );
}