const { length, head, map } = require('ramda');

const clause = operator => (...values) => propName =>
  length(values) > 1
    ? { [operator]: map(value => value(propName), values) }
    : { [propName]: { [operator]: head(values) } };

const build = (propName, clauses) => clauses(propName);

module.exports = {
  clause,
  build
};
