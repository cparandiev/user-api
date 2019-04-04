const userRoutes = require('./userRoutes');

module.exports = app => container => {
  userRoutes(app)(container);
};
