let database = require('../database/config');

const pegarDadosPerguntas = (idPergunta) => {
    
    console.log('Estou no model.');
    
    let instrucao = 
    `
    SELECT *
	FROM Pergunta
		WHERE idPergunta = ${idPergunta};
    `
    return database.executarQuery(instrucao);
}

const executarQueryCorreta = (instrucao) => {

    console.log('Estou no model.');

    return database.executarQuery(instrucao);
}

const testarQueryUsuario = (query) => {

    console.log('Estou no model.');

    return database.executarQuery(query);
}

module.exports = {
    pegarDadosPerguntas,
    executarQueryCorreta,
    testarQueryUsuario
}