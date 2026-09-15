import DashboardShell from '@/components/DashboardShell';
import ApiKeyHero from '@/components/ApiKeyHero';
import KeyLibraryToolbar from '@/components/KeyLibraryToolbar';
import ApiKeyTable from '@/components/ApiKeyTable';

export default function ApiKeyPage() {
  return (
    <DashboardShell activeHref="/developer/api-key">
      <ApiKeyHero />
      <KeyLibraryToolbar />
      <ApiKeyTable />
    </DashboardShell>
  );
}