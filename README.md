# Portfolio

Portfolio profesional desarrollado con React y Vite.

## Internacionalización

El proyecto utiliza `i18next` y `react-i18next` para centralizar los textos visibles de la interfaz.

Idiomas soportados:

- Inglés (`en`)
- Español (`es`)

Los archivos de traducción están en:

- `src/i18n/locales/en/translation.json`
- `src/i18n/locales/es/translation.json`

Para añadir una nueva clave, crea la entrada con la misma ruta en ambos archivos JSON y consume el texto desde los componentes con `useTranslation()` y `t('ruta.de.la.clave')`.

Ambos archivos deben mantener siempre la misma estructura de claves.

## Organización de proyectos

`src/data/projects.js` es la fuente única de información estructural de los proyectos. Para añadir un proyecto nuevo, añade un objeto al array `projects` y crea las claves de traducción correspondientes.

Cada proyecto define su orden, visibilidad, categoría, recursos visuales, tecnologías como objetos reutilizables, enlaces externos y secciones de detalle opcionales. Los componentes sólo renderizan los datos disponibles: si un proyecto no tiene imagen, enlaces, galería o secciones de detalle, esos bloques no se muestran.

## Rutas

El portfolio utiliza `react-router-dom` con `BrowserRouter` para mantener URLs limpias:

- `/`
- `/projects`
- `/projects/:slug`

La aplicación se despliega en la raíz del dominio de GitHub Pages (`https://angelragel05.github.io/`), por lo que no se configura un `basename` ni una base de Vite específica para una subruta.

Para GitHub Pages se incluye `public/404.html` como fallback estático. Cuando se refresca una ruta interna, GitHub Pages sirve ese archivo y redirige a `/?redirect=...` conservando `pathname`, `search` y `hash`. Antes de montar React, `src/main.jsx` valida ese parámetro interno y restaura la URL limpia con `history.replaceState()`.

Después de añadir `react-router-dom`, ejecuta localmente:

```bash
npm install
```

Esto regenerará `package-lock.json` correctamente antes de hacer commit o usar `npm ci`.
