const express = require('express');

module.exports = ({ serverConfig }) => {
  const app = express();

  app.start = () => {
    app.listen(serverConfig.port, () =>
      console.log(`Example app listening on port ${serverConfig.port}!`)
    );

    return app;
  };

  return app;
};
