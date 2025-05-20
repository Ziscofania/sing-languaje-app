# Sign Language App 

Esta aplicación web busca facilitar la **comunicación inclusiva entre personas sordomudas y oyentes** mediante la traducción de lenguaje de señas a texto y voz en tiempo real, y viceversa. Está diseñada con una interfaz accesible, intuitiva y pensada en la inclusión de personas con discapacidad auditiva.


## Objetivo

El objetivo principal del proyecto es **romper las barreras de comunicación** entre personas que utilizan el lenguaje de señas y aquellas que no lo conocen. La aplicación convierte gestos en mensajes escritos o hablados y permite traducir texto/voz en instrucciones visuales o animaciones comprensibles por personas sordas.


## ¿Cómo funciona?

La aplicación web está organizada en diferentes módulos que trabajan en conjunto para lograr una comunicación fluida:

- **Reconocimiento de señas** (en versión futura): Implementación con visión por computadora para interpretar gestos con las manos.
- **Conversión de voz a texto**: Transcripción de audio hablado a texto comprensible.
- **Traducción texto ↔ señas**: Traducción en tiempo real desde texto a representaciones visuales o animaciones de señas.
- **Navegación accesible**: Interfaz adaptable, con navegación clara y fácil para cualquier tipo de usuario.

## Estructura del Proyecto
sign-language-app/
├── Backend/ # Lógica de procesamiento futura (servidor)
├── Fronted/
│ ├── public/ # Archivos estáticos accesibles (index.html, videos, assets)
│ │ ├── index.html
│ │ └── ...
│ ├── src/ # Código fuente
│ │ ├── css/ # Estilos (general, navbar, manos)
│ │ ├── js/ # Scripts JS (scroll, navbar, gráficas)
│ │ ├── pages/ # Páginas como about.html, translator.html
│ │ └── components/ # Componentes HTML reutilizables como navbar.html
├── .gitignore
└── README.md


---

## 🚀 Tecnologías Usadas

- HTML5
- CSS3
- JavaScript Vanilla
- Git & GitHub Pages

---

## 🌐 Deploy

El proyecto está publicado mediante **GitHub Pages** y es accesible desde el siguiente enlace:

🔗 [https://ziscofania.github.io/sing-languaje-app/](https://ziscofania.github.io/sing-languaje-app/)


## Estado del proyecto

En desarrollo. Próximas funcionalidades previstas:

- Captura de gestos en tiempo real usando webcam.
- Modelo IA para reconocimiento de señas.
- Mejora en accesibilidad y experiencia de usuario.
- Integración de API de voz.
  
## Autor

**Ziscofania**  
Estudiante de Ingeniería de Sistemas | Apasionado por el desarrollo web, el desarrollo full-stack y la inclusión tecnológica.




