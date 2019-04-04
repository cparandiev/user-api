module.exports = ({ context, userRepository }) => ({
  init: context.connect,
  user: userRepository
});
