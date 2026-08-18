import type { ReactNode } from "react";
import { showPending } from "@/lib/content";

/**
 * Aviso visible únicamente en desarrollo: señala el contenido que falta añadir
 * sin que nunca llegue a producción.
 */
export default function PendingNote({ children }: { children: ReactNode }) {
  if (!showPending) return null;

  return (
    <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-orange/50 bg-orange-tint px-3 py-2 font-body text-xs text-orange-dark">
      <span aria-hidden className="text-sm leading-none">
        ◆
      </span>
      Pendiente: {children}
    </p>
  );
}
