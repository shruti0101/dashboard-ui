import DashboardShell from '@/components/DashboardShell';
import SectionRail from '@/components/SectionRail';
import ContactsToolbar from '@/components/ContactsToolbar';
import ContactsTable from '@/components/ContactsTable';

export default function ManageContactsPage() {
  return (
    <DashboardShell
      activeHref="/address-book/manage-contacts"
      rail={<SectionRail defaultActive="contacts" />}
    >
      <ContactsToolbar />
      <ContactsTable />
    </DashboardShell>
  );
}
