# AGENTS.md

Este archivo define las reglas permanentes de trabajo para este portfolio. Cualquier agente que trabaje en el repositorio debe leerlo antes de modificar código.

## 1. Fuente Principal De Reglas

- `AGENTS.md` es la fuente principal de convenciones, arquitectura y criterios técnicos del proyecto.
- Antes de modificar código, revisa este archivo y los archivos directamente relacionados con la tarea.
- Si existe conflicto entre instrucciones antiguas, resúmenes previos o decisiones anteriores y este archivo, prevalece `AGENTS.md`.
- No asumas la estructura ni el contenido de archivos que no hayas revisado.

## 2. Objetivo Profesional

- El portfolio debe ayudar a conseguir entrevistas como Full Stack Web Developer.
- Debe transmitir base técnica sólida, criterio profesional y buenas prácticas sin aparentar un nivel senior.
- Debe destacar principalmente Laravel, React, Inertia.js, APIs REST, bases de datos relacionales, arquitectura de software, código mantenible, SOLID, DDD, Git y CI/CD.
- El contenido debe representar honestamente un perfil junior.
- No usar términos como "expert", "senior", "master" ni afirmaciones exageradas.
- No incluir métricas inventadas, porcentajes de dominio ni afirmaciones no demostrables.
- Priorizar evidencia técnica mediante proyectos, decisiones tomadas y problemas resueltos.

## 3. Arquitectura Del Proyecto

Estructura base:

```text
src/
├── assets/
├── components/
├── sections/
├── data/
├── i18n/
├── styles/
├── App.jsx
└── main.jsx
```

Reglas:

- `App.jsx` debe limitarse principalmente a componer el layout general y las secciones.
- Los componentes reutilizables deben estar en `src/components/`.
- Las secciones completas de la página deben estar en `src/sections/`.
- Los datos estructurados deben estar en `src/data/`.
- Las traducciones deben estar exclusivamente en `src/i18n/locales/`.
- Los recursos visuales deben estar en `src/assets/`.
- `src/data/` debe contener únicamente información estructural o técnica independiente del idioma, como IDs, URLs, tecnologías, fechas normalizadas, imágenes y claves de traducción.
- El contenido visible y dependiente del idioma debe permanecer en los archivos de traducción.
- Los objetos de datos deben referenciar claves de `i18next` en lugar de duplicar textos en distintos idiomas.
- Mantener un criterio uniforme: no mezclar textos traducidos directamente y claves de traducción dentro de una misma colección.
- No mezclar datos, traducciones, estilos y presentación en un mismo archivo sin una razón clara.
- No crear carpetas, capas o abstracciones sin una necesidad real.

Ejemplo correcto:

```js
export const projects = [
  {
    id: 'mikiwi',
    titleKey: 'projects.mikiwi.title',
    descriptionKey: 'projects.mikiwi.description',
    technologies: ['Laravel', 'React', 'PostgreSQL'],
    repositoryUrl: 'https://github.com/user/repository',
  },
];
```

## 4. Convenciones De React

- Utilizar componentes funcionales.
- Utilizar hooks sólo cuando exista una necesidad real.
- Mantener componentes pequeños, legibles y con una responsabilidad clara.
- Extraer componentes únicamente cuando mejore la reutilización, legibilidad o mantenibilidad.
- No crear componentes genéricos prematuramente.
- Evitar prop drilling innecesario, pero no introducir Context u otras soluciones globales sin justificación.
- No utilizar React Router mientras el portfolio sea una single-page application.
- No instalar Redux, Zustand ni gestores de estado global sin una necesidad real.
- No introducir TypeScript salvo petición expresa de migración completa.
- No mezclar TypeScript y JavaScript de forma aislada.
- Evitar lógica compleja dentro del JSX.
- Utilizar nombres claros y descriptivos.
- Mantener los IDs de sección estables y en inglés:
  - `home`
  - `projects`
  - `about`
  - `experience`
  - `skills`
  - `work-process`
  - `contact`

## 5. CSS Y Sistema De Diseño

- Utilizar CSS Modules para componentes y secciones.
- Los componentes y secciones con estilos propios deben mantenerse en una carpeta con:
  - `Component.jsx`
  - `Component.module.css`
- Los componentes triviales sin estilos propios pueden mantenerse como un único archivo cuando crear una carpeta no mejore la organización.
- `src/styles/globals.css` debe contener únicamente variables CSS, reset, tipografía, estilos globales y utilidades realmente globales.
- No introducir estilos específicos de componentes en `globals.css`.
- No utilizar estilos inline salvo necesidad técnica clara.
- No hardcodear colores, sombras, radios, tamaños de contenedor o transiciones si ya existe un token global.
- Los CSS Modules deben utilizar los tokens globales para colores, tipografía, contenedores, sombras, radios y transiciones compartidas.
- Los valores específicos de layout de un componente pueden declararse localmente cuando no representen una decisión reutilizable del sistema de diseño.
- No crear tokens globales para valores utilizados una sola vez.
- Mantener una estética profesional, sobria, moderna, tecnológica y accesible.
- Evitar degradados excesivos, neones, animaciones constantes, estética gamer y efectos que reduzcan legibilidad.
- Priorizar jerarquía visual, espacio, contraste y claridad.

## 6. Internacionalización

- Todo texto visible debe gestionarse mediante `i18next`.
- Idiomas soportados: inglés y español.
- Inglés es el idioma de fallback.
- Las traducciones deben mantenerse en:
  - `src/i18n/locales/en/translation.json`
  - `src/i18n/locales/es/translation.json`
- Ambos JSON deben contener exactamente la misma estructura de claves.
- El contenido visible y dependiente del idioma debe estar en los JSON de traducción, no en `src/data/`.
- Las colecciones de `src/data/` deben referenciar claves de traducción mediante propiedades como `titleKey`, `descriptionKey` o equivalentes.
- No dejar textos visibles hardcodeados en JSX.
- No traducir nombres propios, marcas, tecnologías, URLs, IDs HTML ni nombres de clases.
- No concatenar fragmentos traducidos para construir frases.
- Cada frase completa debe tener su propia clave.
- No guardar JSX dentro de los JSON.
- Utilizar `useTranslation()` dentro de los componentes.
- No acceder directamente a la instancia global de `i18next` desde componentes salvo necesidad técnica clara.
- No añadir rutas `/en` o `/es`.
- No introducir React Router para gestionar idiomas.
- El atributo `lang` de `html` debe mantenerse sincronizado con el idioma activo.
- El selector de idioma debe ser accesible y no debe utilizar banderas.

## 7. Accesibilidad

- Utilizar HTML semántico.
- Mantener un solo `h1` por página.
- Respetar la jerarquía de encabezados.
- Todos los controles interactivos deben ser accesibles mediante teclado.
- Añadir estados `focus` visibles.
- Utilizar `aria-label`, `aria-expanded`, `aria-controls` y `aria-pressed` cuando corresponda.
- Las imágenes deben tener `alt` adecuado o `alt=""` si son decorativas.
- Los enlaces externos deben incluir `rel="noreferrer"` cuando proceda.
- No utilizar `div` como botón.
- Respetar `prefers-reduced-motion`.
- Mantener buen contraste de color.
- No ocultar contenido importante únicamente mediante `hover`.

## 8. Responsive Design

- Diseñar con enfoque mobile-first cuando sea razonable.
- El portfolio debe funcionar correctamente en móvil, tablet y escritorio.
- Evitar tamaños fijos que provoquen desbordamientos.
- No depender exclusivamente de media queries específicas para dispositivos concretos.
- Verificar navegación, tarjetas, tipografía, espaciado y botones en pantallas pequeñas.
- No reducir el tamaño del texto hasta comprometer la legibilidad.

## 9. Contenido Profesional

- Todo contenido debe estar disponible en inglés y español.
- El inglés debe sonar natural y profesional, no como una traducción literal.
- El español debe ser claro y profesional.
- El portfolio no debe copiar literalmente el CV o LinkedIn.
- Debe ampliar la información mediante contexto, decisiones técnicas, arquitectura, problemas resueltos, resultados y aprendizajes.
- No inventar contenido sobre experiencia, proyectos o resultados.
- No añadir tecnologías que no estén confirmadas.
- No exagerar responsabilidades.
- Los proyectos deben explicar más que una simple lista de tecnologías.
- Priorizar MiKiWi y los proyectos que mejor representen el perfil Full Stack.

## 10. Dependencias

- No instalar dependencias sin una necesidad clara.
- Antes de instalar una librería, comprobar si la funcionalidad puede resolverse de forma simple con React, JavaScript o CSS.
- Evitar frameworks UI.
- Evitar librerías de animación salvo petición expresa.
- Evitar dependencias que aumenten el bundle sin aportar valor real.
- Mantener compatibilidad con Vite y GitHub Pages.
- Toda dependencia nueva relevante debe justificarse en el resumen final.

## 11. Principios Técnicos

Aplicar cuando corresponda:

- SOLID
- DRY
- KISS
- YAGNI
- separación de responsabilidades
- composición sobre duplicación
- diseño mantenible

Reglas:

- No aplicar patrones complejos sólo por demostrar conocimiento.
- No introducir DDD dentro del frontend si no existe una necesidad real.
- No crear sobrearquitectura.
- Si una solución genera deuda técnica, indicarlo.
- Priorizar la solución más simple que mantenga calidad y claridad.

## 12. Git Y Flujo De Ramas

Flujo principal:

```text
feature/*
  -> develop
  -> main
```

Reglas:

- `develop` es la rama de integración.
- `main` representa producción y despliegue.
- No modificar workflows de GitHub Actions salvo que la tarea lo requiera.
- No realizar commits automáticamente salvo petición expresa.
- Cuando el usuario pida un mensaje de commit:
  - revisar primero los cambios pendientes
  - proponer mensajes en español
  - resumir cada commit en un máximo de dos líneas
  - dividir cambios independientes en commits coherentes
  - indicar qué archivos corresponden a cada commit
  - no mezclar cambios no relacionados
- Los mensajes de commit deben estar siempre en español.

## 13. Documentación

- Documentar únicamente decisiones técnicas relevantes.
- No crear documentación para cambios triviales.
- Documentar decisiones de arquitectura, dependencias relevantes, cambios importantes de internacionalización, despliegue, CI/CD y cambios estructurales.
- Mantener `README.md` actualizado cuando cambien instalación, scripts, estructura, idiomas o despliegue.
- No duplicar documentación ya existente.

## 14. Reglas De Ejecución Para Codex

- No ejecutar comandos de validación salvo petición expresa del usuario.
- No ejecutar automáticamente:
  - `npm install`
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm test`
  - tests
  - servidores
  - comandos headless
- No iniciar procesos en segundo plano.
- No intentar abrir navegadores.
- No realizar validaciones visuales mediante Chrome o Edge headless.
- Limitarse a modificar el código solicitado.
- El usuario realizará las comprobaciones en su entorno local.
- Sí pueden utilizarse comandos de lectura para inspeccionar archivos y estructura.
- No modificar archivos fuera del alcance de la tarea.
- No rehacer código no relacionado.
- No aplicar refactorizaciones amplias sin aprobación.
- Si se detecta un problema fuera del alcance, señalarlo al final sin corregirlo automáticamente.
- No borrar archivos sin comprobar antes que están obsoletos o sin uso.
- No cambiar decisiones ya establecidas sin justificación.

## 15. Forma De Trabajar

Antes de modificar:

1. Leer `AGENTS.md`.
2. Revisar los archivos relacionados.
3. Entender la estructura actual.
4. Identificar dependencias y posibles efectos colaterales.
5. Evitar duplicar componentes, estilos, datos o traducciones.

Durante la modificación:

- Mantener consistencia con el código existente.
- Hacer el cambio mínimo necesario.
- Preservar compatibilidad con el resto del proyecto.
- No introducir código temporal sin marcarlo claramente.
- No utilizar placeholders engañosos.
- No inventar enlaces, datos ni contenido profesional.

Al finalizar:

- No ejecutar validaciones salvo petición expresa.
- Resumir:
  1. archivos creados
  2. archivos modificados
  3. decisiones técnicas relevantes
  4. comprobaciones manuales recomendadas
  5. riesgos o tareas pendientes, si existen

## 16. Definition Of Done

Una tarea se considera completa cuando:

- Cumple exactamente el alcance solicitado.
- Respeta `AGENTS.md`.
- No introduce dependencias innecesarias.
- No deja textos visibles fuera de `i18next`.
- No introduce colores hardcodeados innecesarios.
- Mantiene accesibilidad básica.
- La implementación contempla comportamiento responsive según los estilos y breakpoints existentes.
- No introduce cambios que previsiblemente rompan la estructura existente.
- No modifica archivos no relacionados.
- El código es claro, mantenible y coherente.
- Las comprobaciones ejecutables y visuales quedan pendientes de validación local por parte del usuario, salvo petición expresa.
- El resumen final explica lo realizado sin afirmar validaciones que no se hayan ejecutado.

## 17. SEO Y Rendimiento

- Mantener títulos, descripción y metadatos coherentes con el contenido profesional del portfolio.
- No añadir metadatos, experiencia ni tecnologías no confirmadas.
- Mantener imágenes optimizadas y proporcionar dimensiones cuando sea posible para evitar cambios de layout.
- Usar carga diferida para imágenes que no aparezcan inicialmente en pantalla.
- Evitar dependencias pesadas y código innecesario.
- Mantener compatibilidad con GitHub Pages y rutas estáticas.
- Los enlaces importantes, como GitHub, LinkedIn y descarga del CV, deben seguir funcionando sin JavaScript adicional.
