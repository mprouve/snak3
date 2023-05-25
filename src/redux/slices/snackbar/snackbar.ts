import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { copySnackbar } from 'src/redux/slices/snackbar/helpers/copy-snackbar';

// Define the initial state using that type
const initialState: SnackbarState = {
  snackbar: {
    severity: 'info',
    msg: '',
  },
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSnackbar: {
      reducer(state, action: PayloadAction<SnackbarPayload>) {
        // eslint-disable-next-line no-param-reassign
        state.snackbar = copySnackbar(action.payload.snackbar);
      },
      prepare(snackbar: Snackbar) {
        return {
          payload: {
            snackbar,
          },
        };
      },
    },
    clearSnackbar: state => {
      // eslint-disable-next-line no-param-reassign
      state.snackbar = copySnackbar(initialState.snackbar);
    },
  },
});

export const { setSnackbar, clearSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
