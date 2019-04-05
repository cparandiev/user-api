const validator = require('validator');

const { ValidationError } = require('../../utils/customErrors');

module.exports = ({ data, whereSpecification, orderSpecification }) => {
  const validateNewUser = newUser => {
    if (!validator.isEmail(newUser.email)) throw new ValidationError();

    if (!validator.isLength(newUser.givenName, 5, 100))
      throw new ValidationError();

    if (!validator.isLength(newUser.familyName, 5, 100))
      throw new ValidationError();
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
      validateNewUser(user);

      const newUser = await data.user.createAsync(user);

      return newUser;
    }
  };
};
