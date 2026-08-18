import { Mic } from "lucide-react";
import VideoEmbed from "@/components/media/VideoEmbed";
import { youTubeId } from "@/lib/youtube";
import type { Conference } from "@/data/types";

/**
 * Tarjeta de charla reducida a lo esencial: la grabación y su título. Los demás
 * datos siguen en `data/conferences.ts` para cuando se quieran mostrar.
 */
export default function TalkCard({ talk }: { talk: Conference }) {
  const videoId = youTubeId(talk.video);

  return (
    <article className="overflow-hidden rounded-2xl border border-hairline bg-cream shadow-card">
      {videoId ? (
        <VideoEmbed videoId={videoId} title={talk.title} showCaption={false} />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden bg-navy">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
          <div
            aria-hidden
            className="absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-moss/25 blur-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-mustard">
              <Mic aria-hidden className="h-5 w-5" />
            </span>
            <span className="label text-cream/50">
              Evidencia audiovisual en preparación
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-navy text-balance md:text-xl">
          {talk.title}
        </h3>
      </div>
    </article>
  );
}
