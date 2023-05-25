import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'src/redux/root-reducer';
import { config } from 'src/config/config';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware();

    if (config.is_prod) {
      return defaultMiddleware;
    }

    return defaultMiddleware.concat(logger);
  },
  devTools: !config.is_prod,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;

export default store;
