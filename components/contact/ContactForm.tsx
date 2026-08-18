"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { showPending } from "@/lib/content";

const reasons = [
  "Oportunidad profesional",
  "Proyecto o colaboración",
  "Conferencia o charla",
  "Otro motivo",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 font-body text-sm text-navy transition-colors placeholder:text-muted/70 focus:border-moss focus:outline-none";

/**
 * El mensaje viaja a Web3Forms, que lo reenvía al correo asociado a la clave.
 * La clave es pública por diseño: identifica el buzón de destino, pero no
 * expone la dirección en el sitio ni permite leer los envíos.
 */
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const empty = {
  name: "",
  organization: "",
  email: "",
  reason: reasons[0],
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

const messages: Record<Status, string> = {
  idle: "Respondo a todos los mensajes que llegan por este formulario.",
  sending: "Enviando tu mensaje…",
  sent: "¡Mensaje enviado! Gracias por escribir, te responderé pronto.",
  error:
    "No se pudo enviar el mensaje. Vuelve a intentarlo en un momento o escríbeme por LinkedIn.",
};

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accessKey || status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${form.reason} — ${form.name}`,
          from_name: "Portafolio de Lissy Amador",
          // Permite responder directamente a quien escribe.
          replyto: form.email,
          Nombre: form.name,
          Organización: form.organization || "—",
          Correo: form.email,
          Motivo: form.reason,
          Mensaje: form.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setForm(empty);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const disabled = !accessKey || status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hairline bg-cream p-6 md:p-8"
    >
      {/* Señuelo antispam: si se rellena, Web3Forms descarta el envío. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="font-body text-sm font-medium text-navy"
          >
            Nombre <span aria-hidden className="text-orange-dark">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name")(event.target.value)}
            className={fieldClass}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label
            htmlFor="organizacion"
            className="font-body text-sm font-medium text-navy"
          >
            Organización
          </label>
          <input
            id="organizacion"
            name="organizacion"
            type="text"
            autoComplete="organization"
            value={form.organization}
            onChange={(event) => update("organization")(event.target.value)}
            className={fieldClass}
            placeholder="Empresa o institución"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="font-body text-sm font-medium text-navy"
          >
            Correo <span aria-hidden className="text-orange-dark">*</span>
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email")(event.target.value)}
            className={fieldClass}
            placeholder="nombre@correo.com"
          />
        </div>

        <div>
          <label
            htmlFor="motivo"
            className="font-body text-sm font-medium text-navy"
          >
            Motivo de contacto
          </label>
          <select
            id="motivo"
            name="motivo"
            value={form.reason}
            onChange={(event) => update("reason")(event.target.value)}
            className={fieldClass}
          >
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="mensaje"
          className="font-body text-sm font-medium text-navy"
        >
          Mensaje <span aria-hidden className="text-orange-dark">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          value={form.message}
          onChange={(event) => update("message")(event.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Cuéntame en qué estás pensando."
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-navy transition-colors duration-300 hover:bg-orange-hover disabled:cursor-not-allowed disabled:bg-navy/15 disabled:text-navy/50"
      >
        <Send aria-hidden className="h-4 w-4" />
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p
        className={`mt-4 font-body text-xs leading-relaxed ${
          status === "error" ? "text-orange-dark" : "text-muted"
        }`}
        aria-live="polite"
      >
        {accessKey
          ? messages[status]
          : showPending
            ? "Pendiente: definir NEXT_PUBLIC_WEB3FORMS_KEY en .env.local para activar el envío."
            : "Mientras tanto puedes escribirme por LinkedIn."}
      </p>
    </form>
  );
}
