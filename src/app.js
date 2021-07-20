const express = require('express');
const greedy = require('./routes/greedy.route');

module.exports.bootstrap = () => {
    const app = express();
    greedy.useRoute(app);
    app.listen(3000, () => {
    });
}
