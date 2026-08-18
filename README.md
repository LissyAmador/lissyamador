# Portafolio profesional — Lissy Amador

Sitio construido con **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React**.

Posiciona a Lissy Amador como profesional de **innovación, tecnología, diseño y proyectos**, con casos de estudio que sirven como evidencia en una entrevista.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Estructura

```
app/
  page.tsx                    Home
  sobre-mi/                   Sobre Lissy + cómo trabajo
  experiencia/                Timeline + reconocimientos
  proyectos/                  Listado con filtros
  proyectos/[slug]/           Caso de estudio de cada proyecto
  conferencias/               Charlas con video
  contacto/                   Opciones de contacto + formulario
  sitemap.ts robots.ts icon.svg
components/
  layout/    Header (sticky, menú móvil) y Footer
  ui/        Container, Button, Tag, Reveal, SectionHeading, PageHeader…
  home/      Hero, áreas de experiencia, destacados, proceso, próximamente
  projects/  Tarjeta, filtros, secciones y flujo del caso de estudio
  conferences/ media/ contact/
data/        projects.ts experience.ts conferences.ts skills.ts site.ts types.ts
lib/         content.ts (campos pendientes) y youtube.ts
```

## Dónde se edita el contenido

Todo el contenido vive en `data/`. Los componentes no llevan texto de proyectos, así que
para publicar información nueva no hace falta tocar el diseño.

| Qué quieres cambiar | Archivo |
| --- | --- |
| Proyectos y casos de estudio | `data/projects.ts` |
| Trayectoria y reconocimientos | `data/experience.ts` |
| Charlas y videos | `data/conferences.ts` |
| Áreas de experiencia y método | `data/skills.ts` |
| Correo, LinkedIn, dominio | `data/site.ts` |

### Campos pendientes

Los datos que todavía no están confirmados llevan el valor `TBD` (`lib/content.ts`).
Se muestran con un aviso naranja **solo en desarrollo** y desaparecen por completo en
producción, de modo que el sitio nunca enseña un hueco a medio llenar. Para publicar un
dato basta con sustituir `TBD` por el texto real.

Los enlaces funcionan igual: un enlace con `url: ""` no se renderiza; en cuanto tiene URL,
aparece su botón.

### Añadir un proyecto

Agrega un objeto a `projects` en `data/projects.ts` con al menos `slug`, `title`,
`category`, `categoryLabel` y `shortDescription`. La página `/proyectos/[slug]` se genera
sola, y el caso de estudio numera únicamente las secciones que tengan contenido:
contexto, reto, objetivo, rol, proceso, solución, decisiones de diseño, herramientas,
resultados, evidencias, reflexión y enlaces.

### Añadir el video de una charla

En `data/conferences.ts`, el campo `video` acepta el ID o cualquier URL de YouTube. La
tarjeta muestra miniatura, título y botón de reproducción, y solo carga el reproductor
cuando la persona lo pide.

### Fotografías

Guarda las imágenes en `public/` y pasa la ruta al componente `PhotoFrame` (Home y Sobre
mí). Mientras no exista foto, se muestra una composición geométrica en lugar de un hueco.

## Sistema de diseño

Paleta 60-30-10: el azul marino domina, el verde musgo acompaña y naranja y
mostaza aparecen solo en detalles.

- **Navy `#16233F`** (60%) en títulos, navegación y secciones oscuras.
- **Verde musgo `#5C6B47`** (20-30%) en categorías, bordes de etiquetas e iconos.
- **Naranja `#E07A3E`** (10%) en botones de acción y llamadas a la acción.
- **Mostaza `#D9A441`** (10%) en la línea de categoría, numeración y detalles.
- Fondo crema `#FAF6EF` en superficies y `#F3EDE3` en secciones alternas.
- Texto grafito `#2B2B2B` y secundario `#6E6A63`.
- **Space Grotesk** para títulos y números, **Inter** para texto.

Naranja y mostaza no se usan como color de texto sobre fondos claros: para eso
existen las variantes `orange-dark` y `mustard-dark`, que sí alcanzan el
contraste mínimo.

Los valores están en `tailwind.config.ts` y las utilidades base en `app/globals.css`.

## Accesibilidad

HTML semántico, enlace para saltar al contenido, foco visible, `aria-*` en menú y filtros,
contraste alto y respeto por `prefers-reduced-motion` (las animaciones se desactivan).

## Desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Importa el repositorio en [vercel.com](https://vercel.com); detecta Next.js sin configuración.
3. Define la variable `NEXT_PUBLIC_SITE_URL` con el dominio definitivo para que el sitemap
   y las metaetiquetas Open Graph apunten a la URL correcta.
