module.exports = ({ userRepository }) => ({
  ping: () => {
    console.log(userRepository.add());
    return 'pong';
  }
});
