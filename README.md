# Mockup web · comida por encargo

Mockup de prueba (React + Vite + Tailwind). Todo el contenido es de ejemplo.
El único objetivo del sitio: que la persona termine escribiendo por WhatsApp.

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abrí el link que aparece en la terminal (normalmente http://localhost:5173).
Para probarlo desde el celular, usá `npm run dev -- --host` y entrá con la IP que muestra.

## Cómo cambiar los datos

Todo está en **`src/config.js`**:

- `nombre`, `eslogan`, `whatsapp`, `instagram`, `horario`
- `platos` (nombre, descripción, ingredientes, precio, etiquetas)
- zonas, días y medios de pago (`entregas`)
- textos de cada sección y de los mensajes de WhatsApp (`mensajes`)

El nombre se actualiza solo en la web, en los mensajes de WhatsApp y en el título de la pestaña.
Cuando el sitio deje de ser una prueba, borrá el texto de `pie.aviso` para sacar el aviso del pie de página.

Colores y tipografías: **`tailwind.config.js`**.
Fotos: buscá los comentarios `FOTO:` en `src/components` y reemplazá el bloque de color por una `<img>` (guardá la imagen en `public/`).

## Cómo publicarlo gratis

**Netlify:** `npm run build`, entrá a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastrá la carpeta `dist`.

**Vercel:** subí el proyecto a GitHub, en [vercel.com](https://vercel.com) elegí "Add New Project", importá el repositorio y dejá la configuración por defecto (Vite).

Antes de compartir el link, completá la imagen de portada en `index.html` (comentario `og:image`).
