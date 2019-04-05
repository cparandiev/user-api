module.exports = ({ data, whereSpecification, orderSpecification }) => ({
  getAllAsync: async () => {
    const {
      build,
      operators: { match, or }
    } = whereSpecification;

    const { orderBy, multipleOrder } = orderSpecification;

    const where = build('givenName', or(match('Tsvetko2'), match('Tsvetko3')));

    const order = multipleOrder([
      orderBy({ field: 'givenName', orderType: 'desc' })
    ]);

    const users = await data.user.getAllAsync({ where, order });

    return users;
  },
  createAsync: async user => {
    const newUser = await data.user.createAsync(user);

    return newUser;
  }
});
