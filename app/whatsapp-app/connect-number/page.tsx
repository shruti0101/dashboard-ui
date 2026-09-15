import DashboardShell from '@/components/DashboardShell';
import MetaHero from '@/components/MetaHero';
import NumberLibraryToolbar from '@/components/NumberLibraryToolbar';
import MetaNumbersTable from '@/components/MetaNumbersTable';

export default function ConnectNumberPage() {
  return (
    <DashboardShell activeHref="/whatsapp-app/connect-number">
      <MetaHero />
      <NumberLibraryToolbar />
      <MetaNumbersTable />
    </DashboardShell>
  );
}