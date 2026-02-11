import { CheckCircle2 } from "lucide-react";

export default function BenefitsChecklist({
  benefits,
}: {
  benefits: string[];
}) {
  return (
    <div className="space-y-4 rounded-[2.5rem] border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Manfaat Program
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
            <span className="text-sm text-neutral-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}