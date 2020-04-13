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

        resolve(fullMessage)
    })

    console.log(fullMessage);
}

module.exports = {
    addMessagge,
};