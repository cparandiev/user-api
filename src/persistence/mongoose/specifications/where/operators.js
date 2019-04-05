const { clause } = require('./clause');

const inRange = clause('$in');
const greater = clause('$gt');
const less = clause('$lt');
const match = clause('$eq');
const or = clause('$or');
const and = clause('$and');

module.exports = {
  inRange,
  greater,
  less,
  match,
  or,
  and
};
