"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import { text } from "@/lib/content";

const reasons = [
  "Oportunidad profesional",
  "Proyecto o colaboración",
  "Conferencia o charla",
  "Otro motivo",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 font-body text-sm text-navy transition-colors placeholder:text-muted/70 focus:border-moss focus:outline-none";

export default function ContactForm() {
  const email = text(site.email);
  const mailbox = email?.includes("@") ? email : undefined;

  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    reason: reasons[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mailbox) return;

    const subject = `${form.reason} — ${form.name}`;
    const body = [
      `Nombre: ${form.name}`,
      form.organization ? `Organización: ${form.organization}` : null,
      `Correo: ${form.email}`,
      `Motivo: ${form.reason}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${mailbox}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-hairline bg-cream p-6 md:p-8"
      noValidate={false}
    >
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
        disabled={!mailbox}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-body text-sm font-medium text-navy transition-colors duration-300 hover:bg-orange-hover disabled:cursor-not-allowed disabled:bg-navy/15 disabled:text-navy/50"
      >
        <Send aria-hidden className="h-4 w-4" />
        Enviar mensaje
      </button>

      <p className="mt-4 font-body text-xs leading-relaxed text-muted" aria-live="polite">
        {!mailbox
          ? "El formulario se activa en cuanto se configure el correo profesional en data/site.ts."
          : sent
            ? "Se abrió tu cliente de correo con el mensaje listo para enviar."
            : "El mensaje se abrirá en tu cliente de correo con los datos ya completados."}
      </p>
    </form>
  );
}
