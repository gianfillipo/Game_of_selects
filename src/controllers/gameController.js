let model = require('../models/game');

const pegarDadosPerguntas = (req, res) => {
    
    console.log('Estou no controller');

    let idPergunta = req.params.idPergunta;
        
    console.log(idPergunta);

    if(idPergunta == undefined)
    {
        res.status(400).send('O id está undefined');
    }
    else
    {
        model.pegarDadosPerguntas(idPergunta)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).send(erro.sqlMessage);
            })
    }
}

const executarQueryCorreta = (req, res) => {
    
    console.log('Estou no controller');
    let queryCorreta = req.body.selectCertoServer;

    console.log(queryCorreta);
    if(queryCorreta == undefined)
    {
        res.status(400).send('A query correta está undefined');
    }
    else
    {
        model.executarQueryCorreta(queryCorreta)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).send(erro.sqlMessage);
            });
    }
    
}

const testarQueryUsuario = (req, res) => {
    console.log('Estou no controller');

    let selectUsuario = req.body.selectUsuarioServer

    if(selectUsuario == undefined)
    {
        res.status(400).send('O select do usuário está undefined');
    }
    else
    {
        model.testarQueryUsuario(selectUsuario)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((erro) => {
                res.json(erro.sqlMessage)
                res.status(500).send(erro.sqlMessage);
            })
    }

}

module.exports = { 
    pegarDadosPerguntas,
    executarQueryCorreta,
    testarQueryUsuario
}