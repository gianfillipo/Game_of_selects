const express = require('express');
const router = express.Router();
const gameSelecstController = require('../controllers/gameController');

router.get('/dados-perguntas/:idPergunta', (req, res) => {
    gameSelecstController.pegarDadosPerguntas(req, res);
});

router.post('/select-certo', (req, res) => {
    gameSelecstController.executarQueryCorreta(req, res);
});

router.post('/select-usuario', (req, res) => {
    gameSelecstController.testarQueryUsuario(req, res);
});

module.exports = router;

