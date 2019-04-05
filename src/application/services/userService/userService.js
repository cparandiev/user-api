const {
  validateEmail,
  validateFamilyName,
  validateGivenName
} = require('./validationFuncs');
const {
  INVALID_EMAIL,
  INVALID_FAMILY_NAME,
  INVALID_GIVEN_NAME,
  EMAIL_ALREADY_EXISTS,
  USER_NOT_FOUND
} = require('./constants/errorMessages');

const { ValidationError } = require('../../../utils/customErrors');

module.exports = ({ data, whereSpecification, orderSpecification }) => {
  const validateUniqueEmail = async email => {
    const {
      build,
      operators: { match, or }
    } = whereSpecification;
    const where = build('email', or(match(email), match(email)));

    const users = await data.user.getAll({ where });

    if (users.length > 0)
      throw new ValidationError(EMAIL_ALREADY_EXISTS, 'email');
  };

  const validateUserExists = async id => {
    const user = await data.user.getById(id);
    if (!user) throw new ValidationError(USER_NOT_FOUND, 'id');
  };

  const validateNewUser = async ({ email, givenName, familyName }) => {
    validateEmail({ email, errMsg: INVALID_EMAIL });
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });
    await validateUniqueEmail(email);
  };

  const validateUpdatedUser = async (id, { email, givenName, familyName }) => {
    validateEmail({ email, errMsg: INVALID_EMAIL });
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });
    await validateUserExists(id);
  };

  return {
    create: async ({ email, givenName, familyName }) => {
      await validateNewUser({ email, givenName, familyName });

      const newUser = await data.user.create({
        email,
        givenName,
        familyName,
        created: new Date()
      });

      return newUser;
    },
    getById: async id => {
      await validateUserExists(id);

      const user = await data.user.getById(id);

      return user;
    },
    getAll: async () => {
      const { orderBy, multipleOrder } = orderSpecification;

      const order = multipleOrder([
        orderBy({ field: 'givenName', orderType: 'desc' })
      ]);

      const users = await data.user.getAll({ order });

      return users;
    },
    updateById: async (id, { email, givenName, familyName }) => {
      await validateUpdatedUser(id, { email, givenName, familyName });

      const updatedUser = await data.user.updateById(id, {
        email,
        givenName,
        familyName
      });

      return updatedUser;
    },
    deleteById: async id => {
      await validateUserExists(id);

      await data.user.deleteById(id);
    }
  };
};
