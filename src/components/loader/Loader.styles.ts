import { styled } from '@mui/material';

export const Root = styled('div')`
  background-color: ${({ theme }) => theme.custom.colors.BgDefault};
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;

  .brand-logo {
    display: block;
    max-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
