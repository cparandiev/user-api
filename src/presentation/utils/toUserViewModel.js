const { props, zipObj } = require('ramda');

module.exports = user =>
  zipObj(
    ['id', 'email', 'givenName', 'familyName', 'created'],
    props(['_id', 'email', 'givenName', 'familyName', 'created'])(user)
  );
