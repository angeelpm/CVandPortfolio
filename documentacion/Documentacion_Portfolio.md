# Documentación del Portfolio Web Personal

**Autor:** Ángel  
**Fecha:** Enero 2026  
**URL:** https://angeelpm.github.io/CVandPortfolio/

---

## 1. Tecnologías Utilizadas

### 1.1 HTML5
Se ha utilizado HTML5 semántico para estructurar el contenido de manera clara y accesible. La elección de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) mejora tanto la accesibilidad como el posicionamiento SEO, permitiendo a los motores de búsqueda y tecnologías asistivas comprender mejor la estructura del contenido.

### 1.2 CSS3 (Vanilla CSS)
Se optó por CSS puro sin preprocesadores ni frameworks externos (como Bootstrap o Tailwind) por las siguientes razones:

- **Rendimiento óptimo:** Sin dependencias externas, la carga es más rápida.
- **Control total:** Personalización completa sin limitaciones de frameworks.
- **CSS Custom Properties (Variables):** Sistema de diseño coherente y fácil de mantener.
- **Menor tamaño de archivo:** Solo se incluye el código necesario.

### 1.3 JavaScript (ES6+ Vanilla)
JavaScript nativo sin librerías externas, lo que garantiza:

- **Carga instantánea:** Sin tiempo de descarga de librerías.
- **Compatibilidad:** Funciona en todos los navegadores modernos.
- **Mantenibilidad:** Código limpio y comprensible.

### 1.4 GitHub Pages
Hosting gratuito y confiable integrado con el repositorio Git, permitiendo despliegue automático con cada push.

---

## 2. Elementos Personalizados y Diferenciales

### 2.1 Diseño Visual: Temática Espacial

El portfolio presenta una **estética espacial única** que lo diferencia de los portfolios convencionales:

- **Fondo de estrellas animadas:** 150 estrellas generadas dinámicamente con JavaScript, cada una con propiedades aleatorias (tamaño, posición, duración de parpadeo).
- **Planeta Júpiter decorativo:** Elemento 3D creado enteramente con CSS, con bandas atmosféricas realistas y una luna orbitando.
- **Planetas decorativos en secciones:** 8 planetas y 2 lunas distribuidos por las diferentes secciones, cada uno con colores y tamaños únicos.
- **Gradientes nebulosos:** Efectos de luz tipo nebulosa que aportan profundidad.

Esta temática transmite **creatividad, curiosidad por explorar nuevos horizontes y pasión por la tecnología**.

### 2.2 Sistema de Internacionalización (i18n)

Característica **poco común en portfolios personales**:

- **Cambio dinámico ES/EN:** Botón en la navegación que permite alternar entre español e inglés sin recargar la página.
- **Persistencia:** El idioma seleccionado se guarda en `localStorage`.
- **Cobertura completa:** Todos los textos de la web están traducidos.

### 2.3 Animaciones e Interacciones

- **Animaciones AOS (Animate On Scroll):** Implementación propia sin librería externa, elementos que aparecen suavemente al hacer scroll.
- **Barras de habilidades animadas:** Se llenan progresivamente cuando entran en viewport.
- **Efecto parallax:** Los planetas se mueven a diferentes velocidades al hacer scroll.
- **Transiciones hover:** Todos los elementos interactivos responden al cursor con transformaciones suaves.
- **Navegación activa:** El enlace de navegación se actualiza automáticamente según la sección visible.

### 2.4 Componentes Personalizados

| Componente | Descripción |
|------------|-------------|
| **Timeline** | Línea temporal vertical con marcadores animados para formación y experiencia |
| **Skill Cards** | Tarjetas con iconos, descripciones y barras de nivel |
| **Project Cards** | Tarjetas con overlay y enlaces a demo/código |
| **Contact Form** | Formulario con validación en tiempo real y notificaciones toast |
| **Back to Top** | Botón flotante que aparece al hacer scroll |

---

## 3. Decisiones de Accesibilidad

- **Contraste de colores:** Relación mínima 4.5:1 entre texto y fondo.
- **Focus visible:** Indicador claro para navegación por teclado (`:focus-visible`).
- **Textos alternativos:** Preparado para imágenes con atributos `alt`.
- **Navegación por teclado:** Todos los elementos interactivos son accesibles.
- **Reducción de movimiento:** Media query `prefers-reduced-motion` que desactiva animaciones para usuarios sensibles.
- **Etiquetas en formularios:** Todos los campos tienen `<label>` asociado.

---

## 4. Optimización SEO

- **Meta tags completos:** Descripción, autor, viewport correctamente configurados.
- **HTML semántico:** Estructura clara para crawlers.
- **Encabezados jerárquicos:** Uso correcto de H1, H2, H3.
- **Atributo `lang`:** Definido dinámicamente según el idioma seleccionado.
- **Enlaces descriptivos:** Textos de enlace significativos.
- **Rendimiento:** Carga rápida sin dependencias pesadas.

---

## 5. Aspectos Diferenciales Respecto a Otros Portfolios

| Aspecto | Portfolio Típico | Este Portfolio |
|---------|------------------|----------------|
| **Diseño** | Plantillas genéricas o minimalistas | Temática espacial inmersiva y memorable |
| **Idiomas** | Solo un idioma | Bilingüe con cambio dinámico |
| **Dependencias** | Bootstrap, jQuery, AOS.js, etc. | 100% código propio (Vanilla) |
| **Animaciones** | Librerías externas | Implementación propia optimizada |
| **Elementos decorativos** | Imágenes estáticas | Planetas 3D creados con CSS puro |
| **Personalización** | Limitada por el framework | Total control creativo |

---

## 6. Conclusión

Este portfolio demuestra no solo las **habilidades técnicas** en desarrollo frontend, sino también la capacidad de crear **experiencias únicas y memorables**. La combinación de una estética espacial distintiva, código limpio sin dependencias, internacionalización completa y atención a la accesibilidad, lo posicionan como un proyecto que va más allá de lo convencional en portfolios personales.

La decisión de implementar todo desde cero refleja un **profundo conocimiento de las tecnologías web fundamentales** y la capacidad de crear soluciones personalizadas sin depender de frameworks, habilidad cada vez más valorada en el desarrollo profesional.

---

*Documento generado para la asignatura de Desarrollo Web - Enero 2026*
