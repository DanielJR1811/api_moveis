const express = require('express');
const router = express.Router();

let moveis = [
  {
    "id": 1,
    "nome": "M\u00f3vel 1",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 1",
    "preco": 1000,
    "quantidadeEstoque": 5
  },
  {
    "id": 2,
    "nome": "M\u00f3vel 2",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 2",
    "preco": 1100,
    "quantidadeEstoque": 6
  },
  {
    "id": 3,
    "nome": "M\u00f3vel 3",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 3",
    "preco": 1200,
    "quantidadeEstoque": 7
  },
  {
    "id": 4,
    "nome": "M\u00f3vel 4",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 4",
    "preco": 1300,
    "quantidadeEstoque": 8
  },
  {
    "id": 5,
    "nome": "M\u00f3vel 5",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 5",
    "preco": 1400,
    "quantidadeEstoque": 9
  },
  {
    "id": 6,
    "nome": "M\u00f3vel 6",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 6",
    "preco": 1500,
    "quantidadeEstoque": 10
  },
  {
    "id": 7,
    "nome": "M\u00f3vel 7",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 7",
    "preco": 1600,
    "quantidadeEstoque": 11
  },
  {
    "id": 8,
    "nome": "M\u00f3vel 8",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 8",
    "preco": 1700,
    "quantidadeEstoque": 12
  },
  {
    "id": 9,
    "nome": "M\u00f3vel 9",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 9",
    "preco": 1800,
    "quantidadeEstoque": 13
  },
  {
    "id": 10,
    "nome": "M\u00f3vel 10",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 10",
    "preco": 1900,
    "quantidadeEstoque": 14
  },
  {
    "id": 11,
    "nome": "M\u00f3vel 11",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 11",
    "preco": 2000,
    "quantidadeEstoque": 15
  },
  {
    "id": 12,
    "nome": "M\u00f3vel 12",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 12",
    "preco": 2100,
    "quantidadeEstoque": 16
  },
  {
    "id": 13,
    "nome": "M\u00f3vel 13",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 13",
    "preco": 2200,
    "quantidadeEstoque": 17
  },
  {
    "id": 14,
    "nome": "M\u00f3vel 14",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 14",
    "preco": 2300,
    "quantidadeEstoque": 18
  },
  {
    "id": 15,
    "nome": "M\u00f3vel 15",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 15",
    "preco": 2400,
    "quantidadeEstoque": 19
  },
  {
    "id": 16,
    "nome": "M\u00f3vel 16",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 16",
    "preco": 2500,
    "quantidadeEstoque": 20
  },
  {
    "id": 17,
    "nome": "M\u00f3vel 17",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 17",
    "preco": 2600,
    "quantidadeEstoque": 21
  },
  {
    "id": 18,
    "nome": "M\u00f3vel 18",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 18",
    "preco": 2700,
    "quantidadeEstoque": 22
  },
  {
    "id": 19,
    "nome": "M\u00f3vel 19",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 19",
    "preco": 2800,
    "quantidadeEstoque": 23
  },
  {
    "id": 20,
    "nome": "M\u00f3vel 20",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 20",
    "preco": 2900,
    "quantidadeEstoque": 24
  },
  {
    "id": 21,
    "nome": "M\u00f3vel 21",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 21",
    "preco": 3000,
    "quantidadeEstoque": 25
  },
  {
    "id": 22,
    "nome": "M\u00f3vel 22",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 22",
    "preco": 3100,
    "quantidadeEstoque": 26
  },
  {
    "id": 23,
    "nome": "M\u00f3vel 23",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 23",
    "preco": 3200,
    "quantidadeEstoque": 27
  },
  {
    "id": 24,
    "nome": "M\u00f3vel 24",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 24",
    "preco": 3300,
    "quantidadeEstoque": 28
  },
  {
    "id": 25,
    "nome": "M\u00f3vel 25",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 25",
    "preco": 3400,
    "quantidadeEstoque": 29
  },
  {
    "id": 26,
    "nome": "M\u00f3vel 26",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 26",
    "preco": 3500,
    "quantidadeEstoque": 30
  },
  {
    "id": 27,
    "nome": "M\u00f3vel 27",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 27",
    "preco": 3600,
    "quantidadeEstoque": 31
  },
  {
    "id": 28,
    "nome": "M\u00f3vel 28",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 28",
    "preco": 3700,
    "quantidadeEstoque": 32
  },
  {
    "id": 29,
    "nome": "M\u00f3vel 29",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 29",
    "preco": 3800,
    "quantidadeEstoque": 33
  },
  {
    "id": 30,
    "nome": "M\u00f3vel 30",
    "descricao": "Descri\u00e7\u00e3o do m\u00f3vel 30",
    "preco": 3900,
    "quantidadeEstoque": 34
  }
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