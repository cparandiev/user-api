module.exports = ({ data }) => ({
  getAllAsync: async () => {
    const users = await data.user.getAllAsync();

    return users;
  },
  createAsync: async user => {
    const newUser = await data.user.createAsync(user);

    return newUser;
  }
});
