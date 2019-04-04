const userRepository = require('./userRepository');

module.exports = container => {
  container.registerService('userRepository', userRepository);
};
