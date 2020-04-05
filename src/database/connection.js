const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; //variável ambiente para testes
//leia-se se NODE_ENV for igual a test utiliza o ambiente configuration.test, caso não, utilise o outro.

const connection = knex(config);

module.exports = connection;