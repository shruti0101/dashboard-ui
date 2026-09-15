import DashboardShell from '@/components/DashboardShell';
import RcsUtilityRail from '@/components/RcsUtilityRail';
import BotIdPanel from '@/components/BotIdPanel';

export default function RcsUtilityPage() {
  return (
    <DashboardShell
      activeHref="/rcs-app/utility"
      rail={<RcsUtilityRail defaultActive="bots" />}
    >
      <BotIdPanel />
    </DashboardShell>
  );
}