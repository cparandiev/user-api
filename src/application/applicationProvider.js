const servicesProvider = require('./services/servicesProvider');

module.exports = container => {
  servicesProvider(container);
};
