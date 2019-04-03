const { createContainer, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');
const bodyParser = require('body-parser');

const pingService = require('../../application/service');
const repo = require('../../application/repo');

module.exports = app => {
  const container = createContainer();

  container.register({
    repo: asValue(repo),
    pingService: asFunction(pingService)
  });

  app.use(scopePerRequest(container));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
