const db = require('mongoose');
const Model = require('./model');

//mongodb://user:user1234>@ds363058.mlab.com:63058/telegran
db.Promise = global.Promise;
db.connect('mongodb://user:user1234@ds363058.mlab.com:63058/telegran', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

console.log('[db] Conectada con éxito');

addMessage = (message) => {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

getMessages = async () => {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages
}