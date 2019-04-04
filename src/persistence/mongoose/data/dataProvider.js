const data = require('./data');

module.exports = container => {
  container.registerService('data', data);
};
