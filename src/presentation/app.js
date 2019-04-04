const express = require('express');

const configureMiddlewares = require('./middlewares');
const configureRoutes = require('./routes');

module.exports = {
  init: container => {
    const app = express();

    configureMiddlewares(app);
    configureRoutes(app)(container);
    // container.userRoutes
    return app;
  }
};
