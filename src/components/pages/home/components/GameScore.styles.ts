import { styled } from '@mui/material';

const Root = styled('div')`
  display: block;
  margin-top: 3rem;
  text-align: center;
`;

const ScoreContainer = styled('div')`
  background-color: #000000;
  display: inline-block;
  padding: 0.5rem 1rem;
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

export default {
  Root,
  ScoreContainer,
  Image,
};
