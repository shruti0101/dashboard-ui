const COLUMNS = ['USER NAME', 'KEY NAME', 'API KEY', 'ALLOWED IPS', 'CREATED AT', 'STATUS', 'ACTIONS'];

export default function ApiKeyTable() {
  return (
    <div className="bg-white rounded-xl2 shadow-card border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
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
          <tbody>
            {/* Rows render here once keys are loaded */}
          </tbody>
        </table>
      </div>
    </div>
  );
}