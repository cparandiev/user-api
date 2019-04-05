const validator = require('validator');
const { ValidationError } = require('../../../../utils/customErrors');

module.exports = {
  validateEmail: ({ email, errMsg, field = 'email' }) => {
    if (!validator.isEmail(email)) throw new ValidationError(errMsg, field);
  },
  validateGivenName: ({ givenName, errMsg, field = 'givenName' }) => {
    if (!validator.isLength(givenName, 5, 100))
      throw new ValidationError(errMsg, field);
  },
  validateFamilyName: ({ familyName, errMsg, field = 'familyName' }) => {
    if (!validator.isLength(familyName, 5, 100))
      throw new ValidationError(errMsg, field);
  }
};
