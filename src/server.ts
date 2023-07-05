import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`Database Connected Sucessfully`);

    server = app.listen(config.port, () => {
      logger.info(`University Management Server Listening on ${config.port}`);
    });
  } catch (error) {
    errorLogger.error(`Failed to Connect Database, ${error}`);
  }
}

process.on('unhandledRejection', error => {
  if (server) {
    server.close(() => {
      errorLogger.error(error);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is Received');
  if (server) {
    server.close();
  }
});
