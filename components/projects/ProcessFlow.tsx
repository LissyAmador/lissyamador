import { ChevronRight } from "lucide-react";
import type { ProcessStep } from "@/data/types";

const stepTones = [
  "bg-navy text-cream",
  "bg-orange text-navy",
  "bg-moss text-cream",
  "bg-mustard text-navy",
] as const;

export default function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
      {steps.map((step, index) => (
        <li key={step.name} className="flex flex-1 items-stretch gap-3">
          <div className="flex-1 rounded-xl border border-hairline bg-canvas p-5">
            <span
              className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md px-2 font-display text-xs font-semibold ${stepTones[index % stepTones.length]}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-navy">
              {step.name}
            </h3>
            {step.description ? (
              <p className="mt-2 font-body text-sm leading-relaxed text-muted text-pretty">
                {step.description}
              </p>
            ) : null}
          </div>

          {index < steps.length - 1 ? (
            <ChevronRight
              aria-hidden
              className="hidden h-5 w-5 shrink-0 self-center text-moss lg:block"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
