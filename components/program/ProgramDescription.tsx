export default function ProgramDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Tentang Program
      </p>
      <p className="text-sm leading-7 text-neutral-700 sm:text-base">
        {description}
      </p>
    </div>
  );
}