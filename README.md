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
