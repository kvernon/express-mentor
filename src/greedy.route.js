'use strict';

const routeMethod = (req, res) => {
    res.send('hello');
};

module.exports.routeMethod = routeMethod;

module.exports.useRoute = (server) => {
    server.get('/', routeMethod);
}
