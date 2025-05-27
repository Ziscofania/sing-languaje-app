# Backend - Traductor de Lenguaje de Señas

Este backend proporciona una API REST para consultar la imagen correspondiente a una palabra en lenguaje de señas. Está construido con Node.js y Express, y se conecta a una base de datos MySQL que almacena la relación entre palabras y sus imágenes representativas.

---

## 🔧 Tecnologías utilizadas

- Node.js
- Express
- MySQL
- CORS (para permitir peticiones desde el frontend)
- Servidor estático para imágenes

---

## 📁 Estructura de carpetas

/images/ ← Carpeta con imágenes de señas
hola.png
gracias.png
app.js ← Archivo principal del backend

yaml
Copiar
Editar

---

## 🧠 ¿Cómo funciona?

1. El backend expone un endpoint:  
   `GET /api/traduccion/:palabra`

2. Este endpoint busca la palabra en la base de datos y devuelve la ruta relativa a su imagen (por ejemplo: `images/hola.png`).

3. Las imágenes están disponibles directamente a través del navegador vía:
http://localhost:3001/images/hola.png

yaml
Copiar
Editar

4. El frontend puede usar esta ruta para mostrar la imagen correspondiente a la palabra traducida.

---

## 📌 Ejemplo de flujo desde el frontend

Supongamos que el frontend necesita mostrar la seña para la palabra "hola":

1. Hace una solicitud a:

GET http://localhost:3001/api/traduccion/hola

css
Copiar
Editar

2. El backend responde con:

```json
{
  "imagen": "images/hola.png"
}
Entonces el frontend puede construir la ruta completa y mostrar:

html
Copiar
Editar
<img src="http://localhost:3001/images/hola.png" alt="Seña de hola">
🛠️ Configuración de la base de datos
La tabla MySQL se llama traducciones y contiene:

id (INT, clave primaria)

palabra (VARCHAR) → palabra en español

ruta_imagen (VARCHAR) → ruta relativa a la imagen (por ejemplo: images/gracias.png)

Ejemplo de inserción:

sql
Copiar
Editar
INSERT INTO traducciones (palabra, ruta_imagen) VALUES
('hola', 'images/hola.png'),
('gracias', 'images/gracias.png');
🚀 Instrucciones para correr el backend
Instala dependencias:

bash
Copiar
Editar
npm install
Asegúrate de tener tu base de datos MySQL corriendo.

Inicia el servidor:

bash
Copiar
Editar
node app.js
El backend estará disponible en:

arduino
Copiar
Editar
http://localhost:3001
🤝 Comunicación con frontend
Este backend acepta peticiones desde el frontend (gracias a CORS) y responde con rutas de imágenes para que se puedan renderizar directamente.