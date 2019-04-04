const bodyParser = require('body-parser');

module.exports = ({ app }) => {
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
