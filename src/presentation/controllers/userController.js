module.exports = ({ pingService }) => ({
  getAll: (req, res) => {
    console.log(pingService.ping());

    return res.send('Hello World!');
  }
});
