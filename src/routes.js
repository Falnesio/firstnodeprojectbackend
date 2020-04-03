const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
// const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//const connection = require('./database/connection');

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
/*routes.post("/user", (request, response) => {
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

});*/


/*routes.get("/user", (request, response) => {
    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });
});*/

routes.get("/ongs", OngController.index);/*async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});
 */

routes.post("/ongs",  celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create); /*async (request, response) => {

    //const data = request.body;
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    //console.log(data);

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({
        id
    });
});
*/

routes.post('/sessions', SessionController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number(),
    }).unknown(),
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);
/**
 * exportar rotas para index.js
 */
module.exports = routes;