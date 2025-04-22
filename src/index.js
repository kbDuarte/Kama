require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "HEAD, GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Conecta ao banco MongoDB (via variável de ambiente)
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL)
  .then(() => console.log('✅ Banco de dados conectado!'))
  .catch(err => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });

// Importa e usa as rotas (ajuste o caminho se necessário)
const routes = require('../API/routes/routes'); // <--- cuidado com esse caminho
app.use('/api', routes);

// Rota simples de teste
app.get('/', (req, res) => {
  res.send('Hello Render!');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
