const express = require('express')

const app = express();

app.get("/", (request, response) => {
    //return response.send('Hello world!');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Falnésio Ghander Soares Borges',
        montaria: 'Chae',
        classe: 'Muita'
    });
});

app.listen(3333);

