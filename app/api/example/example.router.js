module.exports = {
    index: {
        path: '/',
        method: 'get',
        middleware: [
            'testMiddlewareFromExample'
        ]
    },
    store: {
        path: '/',
        method: 'post',
        version: '/v2'
    }
}