const configureUserRoutes = require('./userRoutes');

module.exports = app => {
  configureUserRoutes(app);
};
