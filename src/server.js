const createContainer = require('./utils/createContainer');
const { application, presentationProvider } = require('./presentation');
const applicationProvider = require('./application/applicationProvider');
const persistenceProvider = require('./persistence/persistenceProvider');

const container = createContainer();

// #region Register Dependencies

presentationProvider(container);
applicationProvider(container);
persistenceProvider(container);

// #endregion

const app = application.init(container);
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
