const { build } = require('./where/clause');
const operators = require('./where/operators');
const multipleOrder = require('./order/multipleOrder');
const orderBy = require('./order/orderBy');

module.exports = container => {
  container.registerService('whereSpecification', () => ({
    build,
    operators
  }));

  container.registerService('orderSpecification', () => ({
    orderBy,
    multipleOrder
  }));
};
