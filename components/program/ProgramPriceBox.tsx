export default function ProgramPriceBox({
  price,
  ctaLabel,
  ctaHref,
}: {
  price: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm p-6 space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Dukungan Wakaf
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-neutral-900">Mulai dari</p>
          <span className="inline-flex items-center rounded-full bg-brand-green-50 px-2.5 py-0.5 text-xs font-semibold text-brand-green-700 whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-sm text-neutral-600">
          Pilih nominal dan jadwal wakaf sesuai kemampuan Anda.
        </p>
      </div>
      <a
        href={ctaHref}
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary-500 px-8 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        {ctaLabel}
      </a>
      <div className="rounded-xl border border-neutral-200 bg-brand-green-50 p-4 text-sm text-neutral-600">
        <p className="font-semibold text-brand-green-900">Transparansi</p>
        <p className="mt-1">
          Laporan berkala, dokumentasi lapangan, dan audit independen.
        </p>
      </div>
    </div>
  );
}