const middlewares = require('./middlewares');

module.exports = container => {
  container.registerService('middlewares', middlewares, false);
};
