import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="border-neutral-200 shadow-sm">
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Dukungan Wakaf
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-neutral-900">Mulai dari</p>
            <Badge variant="secondary">{price}</Badge>
          </div>
          <p className="text-sm text-neutral-600">
            Pilih nominal dan jadwal wakaf sesuai kemampuan Anda.
          </p>
        </div>
        <Button size="lg" className="w-full" asChild>
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
          <p className="font-semibold text-neutral-900">Transparansi</p>
          <p className="mt-1">
            Laporan berkala, dokumentasi lapangan, dan audit independen.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}