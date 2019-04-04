const application = require('./app');

module.exports = container => {
  container.registerService('app', application, false);
};
