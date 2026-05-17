# SATO-Agro Landing

Landing page independiente para productores (`/`) e instituciones (`/instituciones`).

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `VITE_APP_URL` | URL del CTA principal hacia la app (ej. `https://app.sato-agro.com/app`) |

Copia `.env.example` a `.env` y ajusta los valores.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Compatible con Vercel, Netlify o GitHub Pages. Para SPA con rutas `/instituciones`, configurar rewrites a `index.html`.

## v0

Este repo está pensado para iterar la UI con [v0](https://v0.dev): importa el proyecto o sincroniza componentes en `src/components/landing/`.
