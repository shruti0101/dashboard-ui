import clsx from 'clsx';

type Step = { number: string; label: string };

const STEPS: Step[] = [
  { number: '01', label: 'STEP-1' },
  { number: '02', label: 'STEP-2' },
];

export default function CampaignStepper({ activeStep = 1 }: { activeStep?: number }) {
  return (
    <div className="flex items-center justify-center gap-0 max-w-md mx-auto mb-8">
      {STEPS.map((step, i) => {
        const stepNum = i + 1;
        const isDone = stepNum < activeStep;
        const isActive = stepNum === activeStep;
        const isComplete = isDone || isActive;

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={clsx(
                  'h-11 w-11 rounded-full flex items-center justify-center text-[13px] font-semibold border-2',
                  isComplete
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-white border-slate-200 text-slate-300'
                )}
              >
                {step.number}
              </div>
              <span
                className={clsx(
                  'text-[12px] font-semibold tracking-wide',
                  isComplete ? 'text-slate-700' : 'text-slate-300'
                )}
              >
                {step.label}
              </span>
            </div>

            {i < STEPS.length - 1 && (
              <div
                className={clsx(
                  'h-[2px] flex-1 mx-2 -mt-6',
                  isDone ? 'bg-emerald-600' : 'bg-slate-200'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
