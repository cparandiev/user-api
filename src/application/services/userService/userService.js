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

  const validateNewUser = async ({ email, givenName, familyName }) => {
    validateEmail({ email, errMsg: INVALID_EMAIL });
    validateGivenName({ givenName, errMsg: INVALID_GIVEN_NAME });
    validateFamilyName({ familyName, errMsg: INVALID_FAMILY_NAME });
    await validateUniqueEmail(email);
  };

  return {
    getAll: async () => {
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

      const users = await data.user.getAll({ where, order });

      return users;
    },
    create: async user => {
      await validateNewUser(user);

      const newUser = await data.user.create(user);

      return newUser;
    }
  };
};
