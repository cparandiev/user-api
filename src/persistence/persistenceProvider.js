const dataProvider = require('./mongoose/data/dataProvider');
const contextProvider = require('./mongoose/context/contextProvider');
const repositoriesProvider = require('./mongoose/repositories/repositoriesProvider');
const specificationsProvider = require('./mongoose/specifications/specificationsProvider');

module.exports = container => {
  dataProvider(container);
  contextProvider(container);
  repositoriesProvider(container);
  specificationsProvider(container);
};
