module.exports = ({ userService }) => ({
  getAll: async (req, res) => {
    const users = await userService.getAllAsync();

    return res.send(users);
  }
});
