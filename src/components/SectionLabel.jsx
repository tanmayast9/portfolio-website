/**
 * Small uppercase section label — e.g. "01 / About"
 */
export default function SectionLabel({ index, title }) {
  return (
    <div className="label mb-6 flex items-center gap-4">
      {index && <span className="text-accent">{index}</span>}
      <span className="h-px w-8 bg-[var(--color-line)]" aria-hidden="true" />
      <span>{title}</span>
    </div>
  );
}
