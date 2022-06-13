let mysql = require('mysql2');

let config = {
    host: 'localhost',
    user: 'GameOfSelects',
    password: 'GameOfSelects123$',
    database: 'GameSelects'
};

function executarQuery(instrucao)
{
    return new Promise ((resolve, reject) => {
        let conexao = mysql.createConnection(config);
        conexao.connect();
        conexao.query(instrucao, (erro, resultados) => {
            if(erro)
            {
                reject(erro)
            }
            console.log(resultados);
            resolve(resultados)
        })
        conexao.on('error', (erro) => {
            return('Houve um erro no mysql', erro.sqlMessage)
        });
    });
}

module.exports = 
{
    executarQuery
}
