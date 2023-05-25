import { FC, useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { Button } from '@mui/material';
import Styled from 'src/components/feedback/Alert.styles';

interface AlertProps {
  severity: 'error' | 'info' | 'success' | 'warning';
  variant?: 'filled' | 'outlined' | 'standard';
  msg: string;
  hideClose?: boolean;
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}

const Alert: FC<AlertProps> = ({
  severity,
  variant = 'filled',
  msg,
  hideClose = false,
  action = null,
  onAction = undefined,
  style = {},
}) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Styled.Root style={style}>
      <MuiAlert
        severity={severity}
        variant={variant}
        elevation={6}
        action={
          action && onAction ? (
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={onAction}
              sx={{
                display: 'block',
                padding: '0.3rem .7rem',
                borderRadius: '0.2rem',
                textTransform: 'uppercase',
                fontFamily: 'Barlow',
                fontWeight: '400',
                fontSize: '0.7rem',
                position: 'absolute',
                top: '52%',
                right: '.8rem',
                transform: 'translate(0, -50%)',
              }}
            >
              {action}
            </Button>
          ) : undefined
        }
        onClose={hideClose ? undefined : () => setShow(false)}
        sx={{
          width: '100%',
          paddingRight: action && onAction ? '6.5rem' : 'auto',
          fontFamily: 'Barlow',
          fontWeight: '400',
          position: 'relative',
        }}
      >
        {msg}
      </MuiAlert>
    </Styled.Root>
  );
};

export default Alert;
