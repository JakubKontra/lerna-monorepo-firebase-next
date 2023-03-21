import { createLogger, Logger } from 'browser-bunyan';
import devLoggerConfig from '@your-monorepo/config/logger/config.dev';
import prodLoggerConfig from '@your-monorepo/config/logger/config.prod';

const isProduction = process.env.NODE_ENV === 'production';
const appConfig = isProduction ? prodLoggerConfig : devLoggerConfig;

const loggerFactory = (
  name: string,
  config: Record<string, unknown> = appConfig,
): Logger => {
  return createLogger({
    name,
    config,
  });
};

export default loggerFactory;
