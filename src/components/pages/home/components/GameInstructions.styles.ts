import { styled } from '@mui/material';

const Root = styled('div')`
  display: block;
  margin-top: 1.5rem;
  text-align: center;
`;

const InstructionsContainer = styled('div')`
  background-color: #ff5500;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;

  & > span {
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    text-shadow: 2px 2px #777777;
    font-family: 'VT323', monospace;
    font-size: 2rem;
    font-weight: 00;
    line-height: 2.4rem;
    color: #ffffff;

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;

const Image = styled('img')`
  display: inline-block;
  vertical-align: middle;
  height: 2.4rem;
  width: auto;
  margin-left: 1rem;
`;

export default {
  Root,
  InstructionsContainer,
  Image,
};
