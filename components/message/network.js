const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalidado"
    })
    response.success(req, res, 'Lista de mensaje')
});

router.post('/', (req, res) => {
    controller.addMessagge(req.body.user, req.body.message)
    if (req.query.error === 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
})

module.exports = router;
