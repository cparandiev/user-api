const { map } = require('ramda');
const { toUserViewModel } = require('../utils');

module.exports = ({ userService }) => ({
  create: async (req, res) => {
    const userBm = req.body;

    const newUser = await userService.create(userBm);

    const userVm = toUserViewModel(newUser);

    res.status(201).json(userVm);
  },

  getById: async (req, res) => {
    const user = await userService.getById(req.params.id);

    const userVm = toUserViewModel(user);

    res.status(200).json(userVm);
  },

  getAll: async (req, res) => {
    const users = await userService.getAll();

    const userVms = map(toUserViewModel, users);

    res.status(200).json(userVms);
  },

  updateById: async (req, res) => {
    const {
      body: userBm,
      params: { id }
    } = req;

    const updatedUser = await userService.updateById(id, userBm);

    const userVm = toUserViewModel(updatedUser);

    res.status(200).json(userVm);
  },

  deleteById: async (req, res) => {
    const {
      params: { id }
    } = req;

    const newUser = await userService.deleteById(id);

    res.status(204).json(newUser);
  }
});
