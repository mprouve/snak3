import { BrowserRouter } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { logMain } from 'src/modules/logger/logger';
import { config } from 'src/config/config';
import store from 'src/redux/store';
import ThemeProvider from 'src/styles/theme/ThemeProvider';
import ReduxProvider from 'src/redux/provider';
import GameProvider from 'src/context/game/Game.provider';
import App from 'src/App';
import 'src/styles/global/App.sanitize.scss';
import packageJson from '../package.json';

const container = document.getElementById('__root') as Element;
const root = createRoot(container);

logMain.info(`%c===${packageJson.name} v${packageJson.version}===`, 'color: orange;');
logMain.debug(`%c[PUBLIC_URL]: ${process.env.PUBLIC_URL}`, 'color: cyan;');
logMain.debug(`%c[NODE_ENV]: ${process.env.NODE_ENV}`, 'color: cyan;');
logMain.debug(`%c[REACT_APP_ENV]: ${process.env.REACT_APP_ENV}`, 'color: cyan;');
logMain.debug('%c[REDUX_STATE]: ', 'color: cyan;', store.getState());
logMain.debug(`%c[UUID]: ${config.uuid}`, 'color: cyan;');

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <ReduxProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <GameProvider>
            <App />
          </GameProvider>
        </LocalizationProvider>
      </ReduxProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
