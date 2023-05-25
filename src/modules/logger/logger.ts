import * as log from 'loglevel';
import { config } from '../../config/config';

log.getLogger('main').setLevel(config.logger_levels.main);

export const logMain: log.Logger = log.getLogger('main');

export default log;
