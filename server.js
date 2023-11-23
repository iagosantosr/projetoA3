// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const uri = 'mongodb+srv://iagosantos15br:XwmAFqTe5zaGPHqP@projetoa3.qjon8vs.mongodb.net/?retryWrites=true&w=majority';  

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'projetoa3' });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
});

app.use(express.json());

app.post('/salvarSenha', async (req, res) => {
  try {
    const { data, lembrete, informacoes } = req.body;

    const novaSenha = new Senha({
      data: data,
      lembrete: lembrete,
      informacoes: informacoes,
    });

    await novaSenha.save();

    res.status(201).json({ message: 'Senha salva com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar senha:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

const senhaSchema = new mongoose.Schema({
  data: String,
  lembrete: String,
  informacoes: String,
});

// Renomeando para singular e adicionando ao mongoose.models se já existir
const Senha = mongoose.models.Senha || mongoose.model("Senha", senhaSchema);
