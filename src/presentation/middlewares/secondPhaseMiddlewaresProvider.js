const secondPhaseMiddlewares = require('./secondPhaseMiddlewares');

module.exports = container => {
  container.registerService(
    'secondPhaseMiddlewares',
    secondPhaseMiddlewares,
    false
  );
};
