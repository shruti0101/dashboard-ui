export default function Breadcrumb({ items }: { items: string[] }) {
  return (
    <div className="flex items-center justify-end gap-2 text-[13px] text-slate-500 -mt-1">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          {i > 0 && <span className="text-slate-300">/</span>}
          <span className={i === items.length - 1 ? 'text-brand font-medium' : ''}>{item}</span>
        </span>
      ))}
    </div>
  );
}
