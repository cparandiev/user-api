const context = require('./context');

module.exports = container => {
  container.registerService('context', context);
};
