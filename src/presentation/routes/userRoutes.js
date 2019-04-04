module.exports = app => ({ userController }) => {
  app.get('/user', userController.getAll);
};
