const pine = require("pine");

const logger = pine();

export class APILogger {
  info(message: any, data: any) {
    logger.info(
      `${message}   ${undefined != data ? JSON.stringify(data) : ""}`
    );
  }

  error(message: any) {
    logger.error(message);
  }
}
