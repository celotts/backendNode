const store = require('./store');

let addUser = (name) => {
    if (!name) {
        return Promise.reject('Invalid name');
    }

    const user = {
        name
    };

    return store.add(user);
}

listUsers = () => {
    return store.list();

}
module.exports = {
    addUser,
    listUsers
}