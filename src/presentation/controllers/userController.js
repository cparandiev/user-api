module.exports = ({ userService }) => ({
  create: async (req, res) => {
    const userBm = req.body;

    const newUser = await userService.create(userBm);

    res.status(201).json(newUser);
  },
  getById: async (req, res) => {
    const user = await userService.getById(req.params.id);

    res.status(200).json(user);
  },
  getAll: async (req, res) => {
    const users = await userService.getAll();

    res.status(200).json(users);
  },
  updateById: async (req, res) => {
    const {
      body: userBm,
      params: { id }
    } = req;

    const newUser = await userService.updateById(id, userBm);

    res.status(200).json(newUser);
  },
  deleteById: async (req, res) => {
    const {
      params: { id }
    } = req;

    const newUser = await userService.deleteById(id);

    res.status(204).json(newUser);
  }
});
