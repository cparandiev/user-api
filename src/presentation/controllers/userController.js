module.exports = ({ userService }) => ({
  getAll: async (req, res) => {
    const users = await userService.getAll();

    res.status(200).json(users);
  },
  create: async (req, res) => {
    const userBm = req.body;

    const newUser = await userService.create(userBm);

    res.status(201).json(newUser);
  }
});
