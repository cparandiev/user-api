const controllersProvider = require('./controllers/controllersProvider');
const appProvider = require('./appProvider');
const middlewaresProvider = require('./middlewares/middlewaresProvider');
const routesProvider = require('./routes/routesProvider');

module.exports = container => {
  appProvider(container);
  middlewaresProvider(container);
  controllersProvider(container);
  routesProvider(container);
};
