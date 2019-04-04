const controllersProvider = require('./controllers/controllersProvider');

module.exports = container => {
  controllersProvider(container);
};
