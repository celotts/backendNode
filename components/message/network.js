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
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');

        })

})

module.exports = router;
