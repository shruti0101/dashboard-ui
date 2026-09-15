import DashboardShell from '@/components/DashboardShell';
import BroadcastHeader from '@/components/BroadcastHeader';
import AudienceSourceCard from '@/components/AudienceSourceCard';
import CampaignSetupCard from '@/components/CampaignSetupCard';
import BroadcastFooter from '@/components/BroadcastFooter';
import RcsPhonePreview from '@/components/RcsPhonePreview';

export default function BroadcastRcsPage() {
  return (
    <DashboardShell activeHref="/rcs-app/broadcast">
      <div className="flex flex-col xl:flex-row items-start gap-4">
        <div className="flex-1 w-full flex flex-col gap-4">
          <BroadcastHeader />
          <AudienceSourceCard />
          <CampaignSetupCard />
          <BroadcastFooter recipients={0} />
        </div>

        <div className="w-full xl:w-[280px] shrink-0">
          <RcsPhonePreview />
        </div>
      </div>
    </DashboardShell>
  );
}