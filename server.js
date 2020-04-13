const express = require('express');
const bodyParse = require('body-parser');

const router = require('./network/routes');

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La palicación esta escuchando en el puerto http://localhost:3000');