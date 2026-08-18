import { TBD } from "@/lib/content";
import type { Conference } from "./types";

/**
 * Charlas confirmadas. El campo `video` acepta el ID o la URL de YouTube y
 * activa el reproductor en la tarjeta. `organization` recoge el canal que
 * publicó la grabación; el nombre del evento se completa aparte.
 */
export const conferences: Conference[] = [
  {
    slug: "explora-disena-construye-3d",
    title: "Transforma tus ideas: Explora, Diseña y Construye en el mundo 3D",
    type: "Charla / experiencia de formación",
    event: TBD,
    organization: "Medialab Universidad Galileo",
    date: TBD,
    audience: TBD,
    role: "Ponente",
    description: TBD,
    video: "https://youtu.be/EU9ZZmdAO68",
  },
  {
    slug: "tecnologia-que-salva-vidas-ia",
    title: "Tecnología que salva vidas, cuando la IA ve por ti",
    type: "Charla / presentación sobre tecnología e inteligencia artificial",
    event: TBD,
    organization: "Medialab Universidad Galileo",
    date: TBD,
    audience: TBD,
    role: "Ponente",
    description: TBD,
    video: "https://youtu.be/7sLDinyI7Wk",
  },
];
