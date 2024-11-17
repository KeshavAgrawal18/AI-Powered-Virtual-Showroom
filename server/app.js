const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/carRoutes');
const authRoutes = require('./routes/authRoutes');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/virtualShowroom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
});

const PORT = 5000;
server.listen(PORT, () => console.log(Server running on port ${PORT}));