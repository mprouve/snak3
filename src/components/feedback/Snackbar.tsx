import { forwardRef } from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { clearSnackbar } from 'src/redux/slices/snackbar/snackbar';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Slide, SlideProps } from '@mui/material';

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="right" />;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = () => {
  const snackbar = useAppSelector(state => state.snackbar.snackbar);
  const dispatch = useAppDispatch();

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearSnackbar());
  };

  return (
    <MuiSnackbar
      open={!!snackbar.msg}
      autoHideDuration={5000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      sx={{ zIndex: '100000' }}
    >
      <Alert severity={snackbar.severity} variant="filled" onClose={handleClose} sx={{ width: '100%' }}>
        {snackbar.msg}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
