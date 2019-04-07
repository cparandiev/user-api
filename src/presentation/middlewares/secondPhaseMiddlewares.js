/* eslint-disable no-unused-vars */
require('express-async-errors');
const { ValidationError, NotFoundError } = require('../../utils/customErrors');

module.exports = ({ app, logger }) => {
  app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
      res.status(400).json({ message: err.message, field: err.field });
      logger.info(err);
    } else if (err instanceof NotFoundError) {
      res.status(404).json({ message: err.message, field: err.field });
      logger.info(err);
    } else {
      res.status(500).json({ message: 'Something went wrong!' });
      logger.error(err);
    }
  });
};
