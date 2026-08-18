/** Acepta un ID de YouTube o cualquier formato de URL y devuelve el ID. */
export function youTubeId(input?: string): string | undefined {
  if (!input) return undefined;
  const value = input.trim();
  if (!value) return undefined;
  if (/^[\w-]{11}$/.test(value)) return value;

  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /[?&]v=([\w-]{11})/,
    /\/embed\/([\w-]{11})/,
    /\/live\/([\w-]{11})/,
    /\/shorts\/([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) return match[1];
  }
  return undefined;
}

export function youTubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youTubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youTubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}
