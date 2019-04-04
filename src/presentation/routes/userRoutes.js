module.exports = ({ app, userController, routesConfig: { USER_ROUTES } }) => {
  app.get(USER_ROUTES.GET, userController.getAll);
  app.post(USER_ROUTES.CREATE, userController.create);
};
