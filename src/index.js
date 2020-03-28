const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Dica: "npm install nodemon -D" serve para não ter que reiniciar
 * o "node index.js" toda vez que se faz alguma alteração ao "npm start"
 *
 * Avisar que iremos usar json para receber os corpos de json
 * para entender que as coisas virão em json, para transformar json em
 * javascript
 */
app.use(cors({
    //origin: 'http://urldosite.com'
}));
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Para iniciar o knex fazemos no terminal: npx knex init
 */
