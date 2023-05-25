import { styled } from '@mui/material';

const Root = styled('div')`
  background-color: #ffbb99;
  display: inline-block;
  padding: 0.5rem 2rem;
  border: 6px solid #ff5500;
  text-align: center;
  text-transform: uppercase;
  /* text-shadow: 5px 5px #777777; */
  font-family: 'VT323', monospace;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #ff5500;
    color: #ffbb99;
  }

  &:active {
    color: #ffffff;
  }
`;

export default {
  Root,
};
