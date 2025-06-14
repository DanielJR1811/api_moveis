const express = require('express');
const app = express();
const moveisRoutes = require('./routes/moveis');

app.use(express.json());
app.use('/moveis', moveisRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor da Loja de Móveis rodando na porta ${PORT}`);
});