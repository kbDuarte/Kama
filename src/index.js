const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Libera CORS para qualquer origem
app.use(cors());

// Middleware manual adicional (opcional)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "HEAD, GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

// Configura a porta
const PORT = process.env.PORT || 3000;

// Configura as rotas
const routes = require('./../API/routes/routes'); // Verifique se o caminho existe mesmo
app.use('/api', routes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Hello Render!');
});

// Inicia
