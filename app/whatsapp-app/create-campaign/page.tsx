import DashboardShell from '@/components/DashboardShell';
import Breadcrumb from '@/components/Breadcrumb';
import CampaignStepper from '@/components/CampaignStepper';
import CampaignForm from '@/components/CampaignForm';
import PhoneMockup from '@/components/PhoneMockup';

export default function CreateCampaignPage() {
  return (
    <DashboardShell activeHref="/whatsapp-app/create-campaign">
      <Breadcrumb items={['Whatsapp', 'Compose']} />

      <div className="flex flex-col xl:flex-row items-start gap-6">
        <div className="flex-1 w-full">
          <CampaignStepper activeStep={1} />
          <CampaignForm />
        </div>

        <div className="w-full xl:w-auto flex justify-center pt-2">
          <PhoneMockup name="Jodhpur" phone="+918107838769" />
        </div>
      </div>
    </DashboardShell>
  );
}
