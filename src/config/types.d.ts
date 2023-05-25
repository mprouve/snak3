type Environment = 'local' | 'dev' | 'staging' | 'qa' | 'prod';
type LogLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'SILENT';

interface GlobalConfig {
  is_prod: boolean;
  version: string;
  uuid: string;
  logger_levels: {
    main: LogLevel;
  };
  base_url: {
    snak3: string;
  };
  game_defaults: {
    grid_size: number;
    movement_speed: number;
  };
  ui_variables: {
    mobile_breakpoints: {
      header: number;
    };
  };
}

interface EnvConfig extends GlobalConfig {
  env: Environment;
}

interface LhuGlobals {
  serverEnv?: string;
}

interface Window {
  lhuGlobals?: LhuGlobals;
}
