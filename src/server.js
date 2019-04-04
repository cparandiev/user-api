const { dbConfig, serverConfig } = require('./config');
const createContainer = require('./utils/createContainer');
const presentationProvider = require('./presentation/presentationProvider');
const applicationProvider = require('./application/applicationProvider');
const persistenceProvider = require('./persistence/persistenceProvider');

(async () => {
  try {
    const container = createContainer();

    // #region Register Configs
    container.registerService('dbConfig', () => dbConfig);
    container.registerService('serverConfig', () => serverConfig);
    // #endregion

    // #region Register Lazy Installation Dependencies
    applicationProvider(container);
    persistenceProvider(container);
    // #endregion

    // #region Register Dependencies
    presentationProvider(container);
    // #endregion

    const { data, app } = container;
    data.init();
    app.start();
  } catch (errorMessage) {
    console.error(errorMessage);
    process.exit(1);
  }
})();
