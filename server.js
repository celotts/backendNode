const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParse = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb://user:user1234@ds363058.mlab.com:63058/telegran');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log('La aplicación esta escuchando en el puerto http://localhost:3000');
});
