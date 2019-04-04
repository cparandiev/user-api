const userController = require('./userController');

module.exports = container => {
  container.registerService('userController', userController);
};
