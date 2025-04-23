const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Conexão com PostgreSQL
const pgPool = new Pool({
  host: 'postgres',
  port: 5432,
  user: 'admin',
  password: 'admin123',
  database: 'alunosdb'
});

pgPool.connect()
  .then(() => console.log('✅ Conectado ao PostgreSQL'))
  .catch(err => console.error('❌ Erro ao conectar no PostgreSQL:', err));

// Conexão com MongoDB
const mongoURI = 'mongodb://admin:admin123@mongo:27017/?authSource=admin';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API rodando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
