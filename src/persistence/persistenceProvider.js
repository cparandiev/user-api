const dataProvider = require('./mongoose/data/dataProvider');
const contextProvider = require('./mongoose/context/contextProvider');
const repositoriesProvider = require('./mongoose/repositories/repositoriesProvider');

module.exports = container => {
  dataProvider(container);
  contextProvider(container);
  repositoriesProvider(container);
};
