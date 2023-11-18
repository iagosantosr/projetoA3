// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Porta do servidor

const uri = 'mongodb+srv://iagosantos15br:kNXJW73OUC3z6SNs@projetoa3.qjon8vs.mongodb.net/';  

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
});
 

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

const senhaSchema = new mongoose.Schema({
  data: String,
  lembrete: String,
  informacoes: String,
});

const Senha = mongoose.model("Senha", senhaSchema);
