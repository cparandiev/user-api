const express = require('express');
const configureMiddlewares = require('./middlewares');
const configureRoutes = require('./routes');

const init = () => {
  const app = express();

  configureMiddlewares(app);
  configureRoutes(app);

  return app;
};

module.exports = { init };
