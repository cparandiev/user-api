const { makeInvoker } = require('awilix-express');
const { mapObjIndexed } = require('ramda');

const user = require('./userController');

const controllers = {
  user
};

const w = mapObjIndexed(controller => {
  const wrapController = makeInvoker(controller);

  return mapObjIndexed(
    (method, methodName) => wrapController(methodName),
    controller({})
  );
}, controllers);

// module.exports = wrap2(wrap(controllers));
module.exports = w;
