const { user } = require('../controllers');

module.exports = app => {
  app.get('/user', user.getAll);
};
