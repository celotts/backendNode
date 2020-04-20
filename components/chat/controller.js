const store = require('./store')

let addChat = (users) => {
    console.log('----------', users)
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users
    }
    return store.add(chat)
}

let listChats = (userId) => {
    return store.list(userId)
}
module.exports = {
    addChat,
    listChats
};