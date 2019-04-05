/* eslint-disable no-unused-vars */
require('express-async-errors');
const { ValidationError } = require('../../utils/customErrors');

module.exports = ({ app }) => {
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Something went wrong!' });
    }
  });
};
