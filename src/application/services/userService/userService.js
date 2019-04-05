const {
  validateEmail,
  validateFamilyName,
  validateGivenName
} = require('./validationFuncs');
const {
  INVALID_EMAIL,
  INVALID_FAMILY_NAME,
  INVALID_GIVEN_NAME,
  EMAIL_ALREADY_EXISTS
} = require('./constants/errorMessages');

const { ValidationError } = require('../../../utils/customErrors');

module.exports = ({ data, whereSpecification, orderSpecification }) => {
  const validateNewUser = async ({ email, givenName, familyName }) => {
    const {
      build,
      operators: { match, or }
    } = whereSpecification;

    validateEmail({ email, errMsg: INVALID_EMAIL });
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });

    const where = build('email', or(match(email), match(email)));

    const users = await data.user.getAllAsync({ where });

    if (users.length > 0)
      throw new ValidationError(EMAIL_ALREADY_EXISTS, 'email');
  };

  return {
    getAllAsync: async () => {
      const {
        build,
        operators: { match, or }
      } = whereSpecification;

      const { orderBy, multipleOrder } = orderSpecification;

      const where = build(
        'givenName',
        or(match('Tsvetko2'), match('Tsvetko3'))
      );

      const order = multipleOrder([
        orderBy({ field: 'givenName', orderType: 'desc' })
      ]);

      const users = await data.user.getAllAsync({ where, order });

      return users;
    },
    createAsync: async user => {
      await validateNewUser(user);

      const newUser = await data.user.createAsync(user);

      return newUser;
    }
  };
};
