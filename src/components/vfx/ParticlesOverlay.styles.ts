import { styled } from '@mui/material';

interface RootProps {
  id: string;
}

const Root = styled('div')<RootProps>`
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  ${({ id }) => `
    #${id} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `}
`;

export default {
  Root,
};
