import { combineReducers } from '@reduxjs/toolkit';
import snackbar from 'src/redux/slices/snackbar/snackbar';

const rootReducer = combineReducers({
  snackbar,
});

export default rootReducer;
