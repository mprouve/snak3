interface Snackbar {
  severity: 'error' | 'info' | 'success' | 'warning';
  msg: string;
}

interface SnackbarState {
  snackbar: Snackbar;
}

interface SnackbarPayload {
  snackbar: Snackbar;
}
