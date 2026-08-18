/**
 * Marcador para información que Lissy todavía no ha proporcionado.
 *
 * Los campos marcados así son visibles mientras se desarrolla el sitio (para
 * saber qué falta) y se omiten por completo en el build de producción, de modo
 * que un visitante nunca ve un hueco a medio llenar.
 */
export const TBD = "[INFORMACIÓN POR COMPLETAR]";

export const showPending = process.env.NODE_ENV !== "production";

export function isPending(value?: string | null): boolean {
  return typeof value === "string" && value.includes(TBD);
}

/** Devuelve el texto listo para render, u `undefined` si aún está pendiente. */
export function text(value?: string | null): string | undefined {
  if (!value) return undefined;
  if (isPending(value)) return showPending ? value : undefined;
  return value;
}

/** Filtra los elementos pendientes de una lista y descarta las listas vacías. */
export function list(values?: readonly string[] | null): string[] | undefined {
  if (!values?.length) return undefined;
  const visible = values.filter((value) => !isPending(value) || showPending);
  return visible.length ? visible : undefined;
}

export type ActionLink = {
  label: string;
  url: string;
};

/** Solo se muestran los enlaces que ya tienen URL real. */
export function links(items?: readonly ActionLink[] | null): ActionLink[] {
  if (!items?.length) return [];
  return items.filter((item) => item.url.trim().length > 0);
}

/** Enlaces previstos que aún no tienen URL: se señalan solo en desarrollo. */
export function pendingLinks(items?: readonly ActionLink[] | null): ActionLink[] {
  if (!items?.length || !showPending) return [];
  return items.filter((item) => item.url.trim().length === 0);
}
