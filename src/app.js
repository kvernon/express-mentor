const express = require('express');
const greedy = require('./greedy.route');

module.exports.bootstrap = () => {
    const app = express();
    app.get(greedy.route, greedy.method);
    app.listen(3000, () => {
    });
}
