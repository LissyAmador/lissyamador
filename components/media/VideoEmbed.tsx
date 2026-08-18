"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import {
  youTubeEmbedUrl,
  youTubeThumbnail,
  youTubeWatchUrl,
} from "@/lib/youtube";

/**
 * Reproductor responsive: muestra miniatura, título y botón de reproducción, y
 * carga el iframe de YouTube solo cuando la persona decide verlo.
 */
export default function VideoEmbed({
  videoId,
  title,
  description,
  showCaption = true,
}: {
  videoId: string;
  title: string;
  description?: string;
  showCaption?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-hairline bg-cream">
      <div className="relative aspect-video w-full bg-navy">
        {playing ? (
          <iframe
            src={youTubeEmbedUrl(videoId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Reproducir el video: ${title}`}
          >
            <Image
              src={youTubeThumbnail(videoId)}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-90 transition-all duration-500 ease-soft group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"
            />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-navy shadow-lift transition-transform duration-300 ease-soft group-hover:scale-110"
            >
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      {showCaption ? (
        <figcaption className="p-6">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-navy">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 font-body text-sm leading-relaxed text-muted text-pretty">
              {description}
            </p>
          ) : null}
          <a
            href={youTubeWatchUrl(videoId)}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline mt-4 inline-flex font-body text-sm font-medium text-moss-dark"
          >
            Ver en YouTube
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
