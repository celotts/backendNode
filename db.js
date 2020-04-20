const db = require('mongoose');

//mongodb://user:user1234>@ds363058.mlab.com:63058/telegran
db.Promise = global.Promise;

connect = async (url) => {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connect



console.log('[db] Conectada con éxito');