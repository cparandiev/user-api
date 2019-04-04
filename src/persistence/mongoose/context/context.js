const mongoose = require('mongoose');

module.exports = ({ dbConfig }) => ({
  connect: () =>
    mongoose.connect(dbConfig.connectionString, {
      useNewUrlParser: dbConfig.useNewUrlParser
    }),
  model: mongoose.model
});
