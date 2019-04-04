const middlewares = require('./middlewares');

module.exports = app => {
  middlewares(app);
};
