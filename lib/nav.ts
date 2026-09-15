export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: 'dashboard' | 'address-book' | 'whatsapp' | 'team-inbox' | 'rcs' | 'automations' | 'verify' | 'developer';
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: 'dashboard',
    children: [
      { label: 'Dashboard', href: '/' },
      { label: 'Mis Report', href: '/mis-report' },
    ],
  },
  {
    label: 'Address Book',
    href: '/address-book/manage-contacts',
    icon: 'address-book',
    children: [{ label: 'Manage Contacts', href: '/address-book/manage-contacts' }],
  },
  {
    label: 'Whatsapp App',
    href: '/whatsapp-app/create-campaign',
    icon: 'whatsapp',
    children: [
      { label: 'Wa Create Campaign', href: '/whatsapp-app/create-campaign' },
      { label: 'Utility & Template', href: '/whatsapp-app/templates' },
      { label: 'Connect Wa Number', href: '/whatsapp-app/connect-number' },
      { label: 'Whatsapp Report', href: '/whatsapp-app/report' },
    ],
  },
  { label: 'Team Inbox', href: '/team-inbox', icon: 'team-inbox' },
  { label: 'RCS App', href: '/rcs-app', icon: 'rcs' },
  { label: 'Automations', href: '/automations', icon: 'automations' },
  { label: 'Verify', href: '/verify', icon: 'verify' },
  { label: 'Developer', href: '/developer', icon: 'developer' },
];
