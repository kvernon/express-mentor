'use strict';
const Router = require('express').Router;
const {postUpload} = require("./postUpload");

/**
 *
 * @param {Express } server
 */
module.exports.useRoute = (server) => {
    const router = new Router();
    router.post('/', postUpload);

    server.all('/file', postUpload);
}


