const express = require('express');
const router = express.Router();

let moveis = [
  { id: 1, nome: "Sofá Retrátil 3 Lugares", descricao: "Sofá confortável com tecido suede e estrutura reforçada.", preco: 2000, quantidadeEstoque: 5 },
  { id: 2, nome: "Mesa de Jantar 6 Cadeiras", descricao: "Mesa de madeira maciça com tampo de vidro.", preco: 3000, quantidadeEstoque: 6 },
  { id: 3, nome: "Cama Box Queen Size", descricao: "Cama com base e colchão de molas ensacadas.", preco: 2500, quantidadeEstoque: 7 },
  { id: 4, nome: "Guarda-Roupa 6 Portas", descricao: "Guarda-roupa com espelho e espaço interno amplo.", preco: 1800, quantidadeEstoque: 8 },
  { id: 5, nome: "Rack para TV até 65\"", descricao: "Rack com nichos para eletrônicos e decoração.", preco: 900, quantidadeEstoque: 9 },
  { id: 6, nome: "Poltrona Reclinável", descricao: "Poltrona com revestimento em couro sintético.", preco: 1200, quantidadeEstoque: 10 },
  { id: 7, nome: "Cadeira de Escritório", descricao: "Cadeira ergonômica com regulagem de altura.", preco: 800, quantidadeEstoque: 11 },
  { id: 8, nome: "Mesa de Centro", descricao: "Mesa de centro em MDF com acabamento laqueado.", preco: 600, quantidadeEstoque: 12 },
  { id: 9, nome: "Estante de Livros", descricao: "Estante com 5 prateleiras em madeira pinus.", preco: 700, quantidadeEstoque: 13 },
  { id: 10, nome: "Painel para TV", descricao: "Painel suspenso para TV de até 60\".", preco: 1000, quantidadeEstoque: 14 },
  { id: 11, nome: "Cômoda 4 Gavetas", descricao: "Cômoda com puxadores em alumínio e corrediças metálicas.", preco: 850, quantidadeEstoque: 15 },
  { id: 12, nome: "Balcão de Cozinha", descricao: "Balcão com 3 portas e espaço para forno.", preco: 1100, quantidadeEstoque: 16 },
  { id: 13, nome: "Mesa de Escritório", descricao: "Mesa com tampo amplo e suporte para teclado.", preco: 950, quantidadeEstoque: 17 },
  { id: 14, nome: "Cabeceira Estofada Queen", descricao: "Cabeceira com acabamento em tecido suede cinza.", preco: 700, quantidadeEstoque: 18 },
  { id: 15, nome: "Armário Multiuso", descricao: "Armário com prateleiras internas e portas com puxadores.", preco: 1300, quantidadeEstoque: 19 },
  { id: 16, nome: "Cristaleira de Vidro", descricao: "Cristaleira com portas de vidro e iluminação LED.", preco: 1600, quantidadeEstoque: 20 },
  { id: 17, nome: "Sapateira 2 Portas", descricao: "Sapateira compacta com espaço para até 20 pares.", preco: 650, quantidadeEstoque: 21 },
  { id: 18, nome: "Mesa Lateral", descricao: "Mesa lateral redonda com pés palito.", preco: 400, quantidadeEstoque: 22 },
  { id: 19, nome: "Beliche Infantil", descricao: "Beliche em MDF com escada lateral e proteção de queda.", preco: 1700, quantidadeEstoque: 23 },
  { id: 20, nome: "Bancada de Estudo", descricao: "Bancada com prateleiras para livros e material escolar.", preco: 950, quantidadeEstoque: 24 },
  { id: 21, nome: "Colchão Casal Espuma D33", descricao: "Colchão firme com tratamento antiácaro.", preco: 1000, quantidadeEstoque: 25 },
  { id: 22, nome: "Mesa Bistrô Alta", descricao: "Mesa alta com tampo redondo, ideal para ambientes pequenos.", preco: 750, quantidadeEstoque: 26 },
  { id: 23, nome: "Cadeira de Madeira", descricao: "Cadeira tradicional com encosto anatômico.", preco: 450, quantidadeEstoque: 27 },
  { id: 24, nome: "Puff Baú", descricao: "Puff estofado com espaço interno para armazenamento.", preco: 500, quantidadeEstoque: 28 },
  { id: 25, nome: "Buffet 3 Portas", descricao: "Buffet com tampo amplo e prateleiras internas.", preco: 1400, quantidadeEstoque: 29 },
  { id: 26, nome: "Espelho de Parede", descricao: "Espelho decorativo com moldura de madeira.", preco: 600, quantidadeEstoque: 30 },
  { id: 27, nome: "Mesa de Cabeceira", descricao: "Mesa com 2 gavetas e acabamento em laca.", preco: 550, quantidadeEstoque: 31 },
  { id: 28, nome: "Painel Home Theater", descricao: "Painel com suporte para TV e espaço para som.", preco: 1900, quantidadeEstoque: 32 },
  { id: 29, nome: "Berço com Grade Regulável", descricao: "Berço branco com rodízios e regulagem de altura.", preco: 1500, quantidadeEstoque: 33 },
  { id: 30, nome: "Armário Aéreo de Cozinha", descricao: "Armário com 3 portas basculantes e acabamento branco.", preco: 850, quantidadeEstoque: 34 }
];

// GET - Listar todos os móveis
router.get('/', (req, res) => {
  res.json(moveis);
});

// GET - Buscar um móvel por ID
router.get('/:id', (req, res) => {
  const movel = moveis.find(m => m.id == req.params.id);
  movel ? res.json(movel) : res.status(404).send('Móvel não encontrado');
});

// POST - Adicionar novo móvel
router.post('/', (req, res) => {
  const novoMovel = req.body;
  novoMovel.id = moveis.length + 1;
  moveis.push(novoMovel);
  res.status(201).json(novoMovel);
});

// PUT - Atualizar móvel existente
router.put('/:id', (req, res) => {
  const index = moveis.findIndex(m => m.id == req.params.id);
  if (index !== -1) {
    moveis[index] = { ...moveis[index], ...req.body };
    res.json(moveis[index]);
  } else {
    res.status(404).send('Móvel não encontrado');
  }
});

// DELETE - Remover um móvel
router.delete('/:id', (req, res) => {
  const index = moveis.findIndex(m => m.id == req.params.id);
  if (index !== -1) {
    moveis.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Móvel não encontrado');
  }
});

module.exports = router;
