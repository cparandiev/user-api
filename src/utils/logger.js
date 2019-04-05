const winston = require('winston');

module.exports = () => {
  const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.Console({ format: winston.format.simple() })
    ]
  });

  return {
    error: msg => logger.error(msg),
    warn: msg => logger.warn(msg),
    info: msg => logger.info(msg)
  };
};
