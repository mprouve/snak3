import { styled } from '@mui/material';

const Root = styled('div')`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContentContainer = styled('div')`
  display: block;
  width: 100%;
  max-width: 30rem;
  padding: 0 2rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading = styled('p')`
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 700;
  color: #fff;

  & span {
    color: ${({ theme }) => theme.custom.colors.Yellow};
  }
`;

const Subheading = styled('p')`
  display: block;
  margin-top: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 700;
  color: #fff;

  & span {
    color: ${({ theme }) => theme.custom.colors.Yellow};
  }
`;

const Button = styled('div')`
  background-color: #00000000;
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ffffff;
  border-radius: 0.2rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.1rem;
  color: #ffffff;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export default { Root, ContentContainer, Heading, Subheading, Button };
