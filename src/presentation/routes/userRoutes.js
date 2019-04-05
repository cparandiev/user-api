module.exports = ({ app, userController, routesConfig: { USER_ROUTES } }) => {
  app.post(USER_ROUTES.CREATE, userController.create);
  app.get(USER_ROUTES.GET_BY_ID, userController.getById);
  app.get(USER_ROUTES.GET, userController.getAll);
  app.put(USER_ROUTES.UPDATE_BY_ID, userController.updateById);
  app.delete(USER_ROUTES.DELETE_BY_ID, userController.deleteById);
};
