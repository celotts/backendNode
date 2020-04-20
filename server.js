const express = require('express');
const bodyParse = require('body-parser');
const db = require('./db');

const router = require('./network/routes');

db('mongodb://user:user1234@ds363058.mlab.com:63058/telegran');

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto http://localhost:3000');