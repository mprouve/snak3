import { v4 as uuidv4 } from 'uuid';
import metadata from 'src/metadata/metadata.json';
import packageJson from '../../package.json';

const getConfig = (): EnvConfig => {
  const env: string = process.env.REACT_APP_ENV || '';
  const uuid = uuidv4();
  const isProd: boolean = env === 'prod';
  const snak3BaseUrl = process.env.REACT_APP_BASE_URL_SNAK3 || '';

  /**
   * Set global config settings
   */
  const GLOBAL: GlobalConfig = {
    is_prod: isProd,
    version: `${packageJson.version}-${metadata.build}`,
    uuid,
    // Each key in 'logger_levels' represents a separate logger
    logger_levels: {
      main: isProd ? 'INFO' : 'DEBUG',
    },
    base_url: {
      snak3: snak3BaseUrl,
    },
    game_defaults: {
      grid_size: 15,
      movement_speed: 5,
    },
    ui_variables: {
      mobile_breakpoints: {
        header: 769,
      },
    },
  };

  /**
   * Set environment-specific config settings
   */
  const local: EnvConfig = {
    ...GLOBAL,
    env: 'local',
  };

  const dev: EnvConfig = {
    ...GLOBAL,
    env: 'dev',
  };

  const staging: EnvConfig = {
    ...GLOBAL,
    env: 'staging',
  };

  const qa: EnvConfig = {
    ...GLOBAL,
    env: 'qa',
  };

  const prod: EnvConfig = {
    ...GLOBAL,
    env: 'prod',
  };

  // Based on environment return the appropriate configuration
  switch (env) {
    case 'local':
      return local;
    case 'dev':
      return dev;
    case 'staging':
      return staging;
    case 'qa':
      return qa;
    case 'prod':
      return prod;
    default:
      return dev;
  }
};

export const config: EnvConfig = getConfig();
