import Image from "next/image";
import { showPending } from "@/lib/content";

/**
 * Espacio reservado para fotografía profesional. Mientras no exista imagen,
 * muestra una composición geométrica en lugar de un hueco vacío.
 */
export default function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/5]",
  priority = false,
  sizes = "(min-width: 1024px) 42vw, 100vw",
}: {
  src?: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  /** Ancho real del marco, para no descargar una imagen mayor que la necesaria. */
  sizes?: string;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 h-24 w-24 rounded-tl-[2rem] border-b-2 border-r-2 border-moss/50"
      />
      <div
        aria-hidden
        className="absolute -left-4 -top-4 h-24 w-24 rounded-br-[2rem] border-l-2 border-t-2 border-navy/25"
      />
      <div
        aria-hidden
        className="absolute -right-2 top-12 h-10 w-1.5 rounded-full bg-mustard"
      />

      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-navy shadow-lift`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
            <div
              aria-hidden
              className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-moss/30 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-orange/20 blur-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="font-display text-6xl font-semibold tracking-tight text-cream/90">
                LA
              </span>
              <span className="label text-cream/45">
                Espacio para fotografía profesional
              </span>
            </div>
          </div>
        )}
      </div>

      {!src && showPending ? (
        <p className="mt-4 rounded-lg border border-dashed border-orange/50 bg-orange-tint px-3 py-2 font-body text-xs text-orange-dark">
          Pendiente: fotografía editorial de Lissy. Guardarla en{" "}
          <code className="font-medium">/public/lissy/</code> y pasar la ruta a{" "}
          <code className="font-medium">PhotoFrame</code>.
        </p>
      ) : null}
    </div>
  );
}
