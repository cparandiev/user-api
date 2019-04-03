const { createContainer, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');
const bodyParser = require('body-parser');

const pingService = require('../../application/service');

module.exports = app => {
  const container = createContainer();

  container.register({
    pingService: asValue(pingService)
  });

  app.use(scopePerRequest(container));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
