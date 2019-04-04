const baseRepository = require('./baseRepository');
const userSchema = require('../schemas/userSchema');

module.exports = ({ context }) =>
  baseRepository({ context, modelName: 'user', modelSchema: userSchema });
