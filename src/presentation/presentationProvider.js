const controllersProvider = require('./controllers/controllersProvider');
const appProvider = require('./appProvider');
const middlewaresProvider = require('./middlewares/middlewaresProvider');
const routesProvider = require('./routes/routesProvider');
const secondPhaseMiddlewaresProvider = require('./middlewares/secondPhaseMiddlewaresProvider');

module.exports = container => {
  appProvider(container);
  middlewaresProvider(container);
  controllersProvider(container);
  routesProvider(container);
  secondPhaseMiddlewaresProvider(container);
};
