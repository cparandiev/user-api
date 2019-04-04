module.exports = ({ userService }) => ({
  getAll: (req, res) => {
    // console.log(pingService.ping());
    console.log(userService.ping());
    return res.send('Hello World2!');
  }
});
