const express = require('express');
const bodyParse = require('body-parser');

const response = require('./network/response')
const router = express.Router();

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(router);

app.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalidado"
    })
    response.success(req, res, 'Lista de mensaje')
});

/* app.post('/message', (req, res) => {
    console.log(req.query); // PArametro de la consulta
    console.log(req.body); // 
    res.send('Mensaje añadido');
}) */

app.post('/message', (req, res) => {
    console.log(req.query); // PArametro de la consulta
    console.log(req.body); // 

    //response.success(req, res, 'Creado correctamente', 201);
    if (req.query.error === 'ok') {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
})

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La palicación esta escuchando en el puerto http://localhost:3000')