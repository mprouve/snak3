import { styled } from '@mui/material';

const Root = styled('div')`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BackgroundOverlay = styled('div')`
  background-color: #00000099;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const CenteredContainer = styled('div')`
  display: block;
  width: 100%;
  max-width: 75rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled('div')`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  /* text-shadow: 1px 1px 2px pink; */
  text-shadow: 5px 5px #777777;
  font-family: 'VT323', monospace;
  font-size: 7rem;
  font-weight: 600;
  line-height: 7rem;
  color: #ffffff;

  & > span {
    color: #ffbb99;
    text-shadow: 5px 5px #ff5500;
  }
`;

const PlayButtonContainer = styled('div')`
  display: block;
  margin-top: 3rem;
  text-align: center;
`;

export default {
  Root,
  BackgroundOverlay,
  CenteredContainer,
  Title,
  PlayButtonContainer,
};
