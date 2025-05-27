const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static('images')); // Servir carpeta estática

// Configuración de conexión
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lenguaje_senas',
  port: 3306
});

// Endpoint para obtener imagen por palabra
app.get('/api/traduccion/:palabra', (req, res) => {
  const palabra = req.params.palabra;
  db.query(
    'SELECT ruta_imagen FROM traducciones WHERE palabra = ?',
    [palabra],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0) return res.status(404).send('No encontrada');
      res.json({ imagen: results[0].ruta_imagen });
    }
  );
});

// Arranque del servidor
app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});
