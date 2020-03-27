const express = require('express');

const routes = express.Router();

/**
 * Acionar servidor  > node index.js
 *
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end - mesmo que acessar rota no navegador (/user) => http://localhost:3333/user
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota, após o "?" para paginação ou
 * para buscar o aluno que começa com Falnesio, por exemplo:
 * coloca no insomnia
 * http://localhost:3333/user?aluno=Falnesio
 *
 * Route Params: Parâmetros para buscar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou  alterar recursos
 */

/**
 * request recebe a rota completa
 */
/*routes.post("/user", (request, response) => {
    // Para registrar tudo que é requisitado, guardaremos as requisições em params
    const params = request.query;
    // Para retornar no console o que existe em params faremos:
    console.log(params);

    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });

});*/

/**
 * Para buscar por meio dos route parameters faremos o seguinte.
 * Assim, ao usar o insomnia pra buscar http://localhost:3333/user/1
 * obtemos a resposta adequada ao número 1.
 */
/*routes.post("/user/:id", (request, response) => {
    // Para registrar tudo que é requisitado, guardaremos as requisições em params
    const params = request.params;
    // Para retornar no console o que existe em params faremos:
    console.log(params);

    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });

});*/

/**
 * Receber a criação de um novo usuário com informações do body de um post
 */
routes.post("/user", (request, response) => {
    // Para registrar tudo que é requisitado, guardaremos as requisições em params
    const body = request.body;
    // Para retornar no console o que existe em params faremos:
    console.log(body);

    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });

});


routes.get("/user", (request, response) => {
    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });
});

/**
 * exportar rotas para index.js
 */
module.exports = routes;