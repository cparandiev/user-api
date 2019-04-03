module.exports = ({ repo }) => ({
  ping: () => {
    console.log(repo.add());
    return 'pong';
  }
});
