const express = require('express');

module.exports = ({ serverConfig, logger }) => {
  const app = express();

  app.start = async () => {
    await app.listen(serverConfig.port);
    logger.info(`Example app listening on port ${serverConfig.port}!`);
  };

  return app;
};
