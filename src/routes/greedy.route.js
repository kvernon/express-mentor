'use strict';

const getHello = (req, res) => {
    res.send('hello');
};

module.exports.getHello = getHello;

module.exports.useRoute = (server) => {
    server.get('/', getHello);
}
