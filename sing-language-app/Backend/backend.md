# 📦 Backend - Traductor de Lenguaje de Señas

Este backend es parte del proyecto de traducción de lenguaje de señas. Se encarga de servir imágenes del abecedario en lenguaje de señas, para que el frontend las pueda mostrar cuando un usuario escribe una palabra.

---

## 📁 Estructura del Backend

backend/
├── index.js # Servidor Express
├── imagenes/
│ └── alfabeto/
│ ├── letra a.png
│ ├── letra b.png
│ └── ...


---

## ⚙️ ¿Qué hace este backend?

1. **Sirve archivos estáticos** desde la carpeta `/imagenes/alfabeto`.
2. **Expone una API REST** para obtener la imagen de una letra específica.
3. **Conecta con el frontend** para mostrar cada imagen al escribir una palabra.

---

## 🔧 Cómo configurarlo

### 1. Ve a la carpeta del backend:

```bash
cd backend

2. Instala las dependencias necesarias:

npm init -y
npm install express cors

    Asegúrate de tener Node.js y npm instalados.

🚀 Cómo correr el backend

Una vez dentro de la carpeta backend, ejecuta:

node index.js

El servidor quedará corriendo en:

http://localhost:3000

🌐 API - Endpoints
🔤 Obtener imagen de una letra

GET /api/abecedario/:letra

Ejemplo:

GET http://localhost:3000/api/abecedario/a

Respuesta:

{
  "letra": "a",
  "imagen_url": "/imagenes/alfabeto/letra a.png"
}

🧠 ¿Cómo se conecta con el frontend?

El HTML del frontend (ubicado en frontend/src/pages/practica.html) realiza peticiones a este backend para cada letra escrita por el usuario. Luego, muestra cada imagen con una duración de 3 segundos por letra.

    Es necesario que el backend esté corriendo en paralelo al frontend para que las imágenes puedan cargarse correctamente.

🧪 Ejemplo de uso

    Inicia el backend con node index.js.

    Abre practica.html desde el navegador.

    Escribe una palabra, como hola.

    El sistema mostrará cada letra con su respectiva seña.