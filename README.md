# La Casa del Caballero — Barbería & Club

Sitio web estático de presentación para una barbería. La experiencia está planteada como una landing page de una sola página, en español, con una estética oscura y detalles dorados.

## Análisis del proyecto

### Estructura y tecnologías

- `index.html`: contenido y estructura de la página.
- `styles.css`: estilos, diseño adaptable y componentes visuales.
- `script.js`: interacciones del menú, filtros de galería, selección de servicios y solicitud de turno por WhatsApp.
- HTML, CSS y JavaScript nativos; no hay framework, gestor de paquetes ni backend.

### Funcionalidades presentes

- Navegación por secciones: inicio, presentación, servicios, galería y reservas.
- Menú móvil desplegable.
- Catálogo de cuatro servicios con precios y duración; la selección de una tarjeta completa el servicio en el formulario.
- Galería con filtros para degradados, cortes clásicos y barbas.
- Formulario de solicitud de turno que prepara un mensaje y abre WhatsApp.
- Diseño adaptable y transiciones visuales.

### Dependencias externas

Google Fonts (Cinzel y Montserrat), Font Awesome 6.4.0 e imágenes alojadas en Unsplash. La carga de estos recursos requiere conexión a Internet.

## Alcance y consideraciones

La reserva es una solicitud manual: el formulario abre WhatsApp con los datos ingresados, pero no confirma turnos, comprueba disponibilidad ni guarda reservas en un servidor. El número de contacto está definido en `script.js` y también aparece en el pie de página de `index.html`; ambos deben mantenerse sincronizados si cambia.

Antes de publicar, confirmar que los servicios, precios, horarios, teléfono e imágenes correspondan a la información vigente del negocio.

## Ejecución

No hay proceso de compilación configurado. Se puede abrir `index.html` directamente en un navegador moderno. Las fuentes, los iconos y las fotografías dependen de los servicios externos indicados arriba.
