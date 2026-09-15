'use client';

import {
  LayoutDashboard,
  BookUser,
  MessageCircle,
  Users,
  Radio,
  Workflow,
  ShieldCheck,
  Code2,
  ChevronDown,
  Home,
  BarChart3,
  FileText,
  Link2,
} from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { NAV_ITEMS, NavItem } from '@/lib/nav';

const ICONS: Record<NavItem['icon'], React.ElementType> = {
  dashboard: LayoutDashboard,
  'address-book': BookUser,
  whatsapp: MessageCircle,
  'team-inbox': Users,
  rcs: Radio,
  automations: Workflow,
  verify: ShieldCheck,
  developer: Code2,
};

// Per-child icons for sidebar sub-items, keyed by label. Falls back to Home.
const CHILD_ICONS: Record<string, React.ElementType> = {
  'Mis Report': BarChart3,
  'Manage Contacts': Users,
  'Wa Create Campaign': MessageCircle,
  'Utility & Template': FileText,
  'Connect Wa Number': Link2,
  'Whatsapp Report': BarChart3,
};

export default function Sidebar({ activeHref = '/' }: { activeHref?: string }) {
  const defaultOpen =
    NAV_ITEMS.find((item) => item.children?.some((c) => c.href === activeHref))?.label ??
    'Dashboard';
  const [openMenu, setOpenMenu] = useState<string | null>(defaultOpen);

  return (
    <aside className="hidden lg:flex lg:w-[248px] shrink-0 flex-col bg-sidebar h-screen sticky top-0">
      {/* Logo */}
      <div className="h-[64px] flex items-center px-4 bg-white">
        <div className="flex flex-col leading-tight">
          <span className="text-[15px] font-bold text-slate-800">
            India<span className="text-brand">Digital</span>SMS
            <sup className="text-[9px] align-super font-semibold text-slate-500">®</sup>
          </span>
          <span className="text-[9px] text-slate-400 tracking-wide">
            The world&apos;s best Messaging Platform
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll py-3 px-2">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            const isOpen = openMenu === item.label;
            const hasChildren = !!item.children?.length;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() =>
                    hasChildren ? setOpenMenu(isOpen ? null : item.label) : undefined
                  }
                  className={clsx(
                    'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition-colors',
                    'text-sidebar-text hover:bg-sidebar-hover hover:text-white'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} strokeWidth={2} />
                    {item.label}
                  </span>
                  {hasChildren && (
                    <ChevronDown
                      size={15}
                      className={clsx(
                        'transition-transform text-sidebar-muted',
                        isOpen && 'rotate-180'
                      )}
                    />
                  )}
                </button>

                {hasChildren && isOpen && (
                  <ul className="mt-1 ml-2 border-l border-sidebar-border pl-2 space-y-0.5">
                    {item.children!.map((child) => {
                      const active = child.href === activeHref;
                      const ChildIcon = CHILD_ICONS[child.label] ?? Home;
                      return (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className={clsx(
                              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition-colors',
                              active
                                ? 'bg-sidebar-active text-white border-l-2 border-brand -ml-[2px] pl-[10px]'
                                : 'text-sidebar-text hover:bg-sidebar-hover hover:text-white'
                            )}
                          >
                            <ChildIcon size={16} strokeWidth={2} />
                            {child.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
