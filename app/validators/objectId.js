module.exports = function (data, field, message, args, get) {
    return new Promise(function (resolve, reject) {
        const fieldValue = get(data, field)

        if(!fieldValue) {
            return reject('field is not defined')
        }

        const reg = /^[0-9a-fA-F]{24}$/
        if (reg.test(fieldValue)) {
            resolve()
        } else {
            reject(message)
        }

    })
}