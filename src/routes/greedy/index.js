'use strict';
const Router = require('express').Router;
const {getHello} = require("./get-hello");

/**
 *
 * @param {Express } server
 */
module.exports.useRoute = (server) => {
  const router = new Router();
  router.get('/', getHello);

  server.use('/', router);
}
