
const Model = require('./model');

addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

getMessages = async (filterUser) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterUser !== null) {
            filter = { user: filterUser }
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated)
            })
    })
}

let removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    })
}

let updateText = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}