const userService = require('./userService');

module.exports = container => {
  container.registerService('userService', userService);
};
