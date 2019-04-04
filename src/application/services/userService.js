module.exports = ({ data }) => ({
  getAllAsync: async () => {
    const users = await data.user.getAllAsync();

    return users;
  }
});
