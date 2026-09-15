import EmptyState from './EmptyState';

const COLUMNS = ['WORKFLOW', 'CHANNEL', 'IDENTITY', 'TIMELINE', 'RUN', 'ACTION'];

export default function WorkflowTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-indigo-50/70">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-[12px] font-semibold tracking-wide text-slate-600 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
        </table>

        <EmptyState />
      </div>
    </div>
  );
}