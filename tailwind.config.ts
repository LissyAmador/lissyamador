import type { Config } from "tailwindcss";

/**
 * Paleta 60-30-10:
 *  60% azul marino (dominante)  ·  20-30% verde musgo (apoyo)
 *  10% naranja + mostaza (acentos puntuales)
 *
 * Los tonos `dark` existen para que naranja y mostaza puedan usarse como texto
 * sobre fondos claros sin perder contraste; los `tint` son los fondos suaves de
 * tags y chips. `cream` sustituye al blanco puro y `canvas` es su tono cálido
 * inmediato, que mantiene la alternancia entre secciones.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16233F",
          soft: "#22314F",
          line: "#3A4763",
        },
        moss: {
          DEFAULT: "#5C6B47",
          dark: "#47533A",
          tint: "#EDEFE6",
        },
        orange: {
          DEFAULT: "#E07A3E",
          hover: "#CE6B31",
          dark: "#B85E22",
          tint: "#FBEEE4",
        },
        mustard: {
          DEFAULT: "#D9A441",
          dark: "#8A6A22",
          tint: "#FBF3E1",
          /** Fondo y texto del badge de categoría del hero. */
          soft: "#FAF0DC",
          deep: "#412402",
        },
        cream: "#FAF6EF",
        canvas: "#F3EDE3",
        graphite: "#2B2B2B",
        muted: "#6E6A63",
        hairline: "#E7DFD2",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "76rem",
        prose: "44rem",
      },
      letterSpacing: {
        label: "0.16em",
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 35, 63, 0.04), 0 12px 32px -20px rgba(22, 35, 63, 0.22)",
        lift: "0 2px 4px rgba(22, 35, 63, 0.05), 0 24px 48px -24px rgba(22, 35, 63, 0.28)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
