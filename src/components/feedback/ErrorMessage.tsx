import { CSSProperties, FC } from 'react';
import Styled from 'src/components/feedback/ErrorMessage.styles';

type ErrorMessageProps = {
  msg?: string | null;
  style?: CSSProperties;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ msg, style }) => {
  if (!msg) return null;

  return <Styled.Root style={style || {}}>{msg}</Styled.Root>;
};

export default ErrorMessage;
