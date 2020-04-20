const store = require('./store')

let addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.log('[messageController] No hay usuario mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        }

        store.add(fullMessage);
        resolve(fullMessage)
    })
    console.log(fullMessage);
}

let getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

let updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);

        resolve(result);

    })
}

let deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido');
            return false;
        }

        store.remove(id)
            .then(() => { resolve(); })
            .catch(e => {
                reject(e);
            })
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};