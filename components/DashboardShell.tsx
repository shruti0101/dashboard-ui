import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DashboardShell({
  activeHref = '/',
  rail,
  children,
}: {
  activeHref?: string;
  /** Optional secondary icon rail for a module's sub-navigation (e.g. Address Book). */
  rail?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar activeHref={activeHref} />
      {rail}
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4 lg:p-6 flex flex-col gap-4">{children}</main>
      </div>
    </div>
  );
}
