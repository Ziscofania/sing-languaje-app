const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Configuración estática - Ruta ABSOLUTA
app.use(express.static(path.join(__dirname, '../Fronted/public')));

// Rutas - Versión robusta con verificación
app.get('/transmitter', (req, res) => {
  const filePath = path.join(__dirname, '../Fronted/public/transmitter.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error al enviar transmitter.html:', err);
      res.status(404).send('Archivo no encontrado');
    }
  });
});

app.get('/receiver', (req, res) => {
  const filePath = path.join(__dirname, '../Fronted/public/receiver.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error al enviar receiver.html:', err);
      res.status(404).send('Archivo no encontrado');
    }
  });
});
// Socket.io
io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.on('join_room', (roomId, userType) => {
    socket.join(roomId);
    console.log(`${userType} conectado en sala ${roomId}`);
  });

  socket.on('send_signal', (roomId, signal) => {
    socket.to(roomId).emit('receive_signal', signal);
  });

  socket.on('send_message', (roomId, message) => {
    socket.to(roomId).emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});