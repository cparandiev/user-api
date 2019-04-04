const userRoutes = require('./userRoutes');

module.exports = container => {
  container.registerService('userRoutes', userRoutes, false);
};
