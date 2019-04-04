const { dbConfig, serverConfig } = require('./config');
const createContainer = require('./utils/createContainer');
const { application, presentationProvider } = require('./presentation');
const applicationProvider = require('./application/applicationProvider');
const persistenceProvider = require('./persistence/persistenceProvider');

(async () => {
  try {
    const container = createContainer();
    const { port } = serverConfig;

    // #region Register Configs
    container.registerService('dbConfig', () => dbConfig);
    // #endregion

    // #region Register Dependencies
    presentationProvider(container);
    applicationProvider(container);
    persistenceProvider(container);
    // #endregion

    const { data } = container;
    data.init();

    const app = application.init(container);

    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (errorMessage) {
    console.error(errorMessage);
    process.exit(1);
  }
})();
