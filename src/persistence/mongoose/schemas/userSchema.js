const { Schema } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String
  },
  givenName: {
    type: String
  },
  familyName: {
    type: String
  },
  created: {
    type: Date
  }
});

module.exports = userSchema;
