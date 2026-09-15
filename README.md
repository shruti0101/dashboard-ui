# IndiaDigitalSMS — Operations Dashboard

A Next.js (App Router) + Tailwind CSS recreation of the Operations Dashboard screenshot:
dark sidebar nav, topbar (clock, wallet, notifications, user menu), filters bar,
6 stat cards, a status-distribution donut chart, and a traffic-trends area chart
(built with [recharts](https://recharts.org)).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          # root layout, loads globals.css
  page.tsx             # the Operations Dashboard page
  globals.css
components/
  DashboardShell.tsx   # sidebar + topbar + <main> wrapper — reuse this on every new page
  Sidebar.tsx           # dark nav, collapsible "Dashboard" group (Dashboard / Mis Report)
  Topbar.tsx             # hamburger, go back, live clock, wallet balance, bell, user menu
  PageHeader.tsx          # page icon + title + subtitle + channel pill
  FilterBar.tsx            # Channel / Period / From / To filters + Apply
  StatCards.tsx             # Initiated / Sent / Delivered / Read / Failed / Reply
  StatusDistributionChart.tsx  # donut chart
  TrafficTrendsChart.tsx        # multi-series area chart
lib/
  nav.ts                # single source of truth for sidebar nav items — add new
                         # pages here and they show up in the sidebar automatically
```

## Adding the next pages

When you share screenshots of the other pages (Mis Report, Address Book, Whatsapp App,
Team Inbox, RCS App, Automations, Verify, Developer), each one becomes a new route:

```
app/mis-report/page.tsx
app/address-book/page.tsx
...
```

Each new page.tsx should wrap its content in `<DashboardShell activeHref="/its-route">`
so the sidebar/topbar chrome stays identical across the whole app — only the
`<main>` content changes per page. Add the route to `lib/nav.ts` if it needs its own
top-level sidebar entry, or as a `children` entry if it belongs under an existing group
(the way "Mis Report" sits under "Dashboard").

## Design tokens

Defined in `tailwind.config.js` under `theme.extend.colors`:

- `sidebar.*` — the dark navy sidebar background/hover/active/border/text shades
- `brand.*` — the indigo/blue accent used for buttons, active states, links
- `page` — the light grey app background
- `stat.*` — reserved hex values for the six stat-card accents (initiated, sent, delivered,
  read, failed, reply) if you want to swap `StatCards.tsx` off Tailwind's default palette

Reuse these tokens (e.g. `bg-brand`, `text-sidebar-text`, `border-l-stat-delivered`) rather
than hardcoding new hex values, so future pages stay visually consistent.
