const store = require('./store')

let addMessagge = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log('[messageController] No hay usuario mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMessage);
        resolve(fullMessage)
    })

    console.log(fullMessage);
}

getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}
module.exports = {
    addMessagge,
    getMessages,
};