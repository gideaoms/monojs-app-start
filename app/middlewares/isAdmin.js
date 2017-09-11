module.exports = (request, response, next) => {
    console.log('Passed here "isAdmin"')
    next()
}