const { makeInvoker } = require('awilix-express');
const { mapObjIndexed } = require('ramda');

const user = require('./userController');

const controllers = {
  user
};

// const wrap = mapObjIndexed(makeInvoker, controllers);
// const wrap2 = mapObjIndexed(value => {
//   console.log(value);
//   mapObjIndexed((v, k) => console.log(k) || v, value);
//   return { getAll: value('getAll') };
// });

const w = mapObjIndexed(controller => {
  const wrapController = makeInvoker(controller);

  return mapObjIndexed(
    (method, methodName) => wrapController(methodName),
    controller({})
  );
}, controllers);

// module.exports = wrap2(wrap(controllers));
module.exports = w;
