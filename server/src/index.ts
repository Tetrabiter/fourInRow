import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Connect 4 Server is running!');
});

// Инициализация WebSocket-сервера
const httpServer = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');
  ws.send('Welcome to Connect 4 Server!');
});