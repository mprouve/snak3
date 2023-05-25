import { styled } from '@mui/material';
import { getTileColor } from 'src/tools/getTileColor';

const Root = styled('div')`
  background-color: #000000;
  display: block;
  width: 500px;
  height: 500px;
  margin: 3rem auto 0 auto;
  box-sizing: content-box;
  border: 4px solid #ff5500;
  box-shadow: 0 0 8px 8px #ff550077;
  position: relative;
`;

interface TileContainerProps {
  gridSize: number;
  row: number;
  col: number;
}

const TileContainer = styled('div')<TileContainerProps>`
  display: block;
  width: ${({ gridSize }) => 100 / gridSize}%;
  height: ${({ gridSize }) => 100 / gridSize}%;
  position: absolute;
  top: ${({ gridSize, row }) => (100 / gridSize) * row}%;
  left: ${({ gridSize, col }) => (100 / gridSize) * col}%;
`;

interface TileProps {
  value: number;
  isHead: boolean;
}

const Tile = styled('div')<TileProps>`
  background-color: ${({ value, isHead }) => getTileColor(value, isHead).colorPrimary};
  display: block;
  width: 80%;
  aspect-ratio: 1;
  border-radius: 0.2rem;
  box-sizing: border-box;
  box-shadow: ${({ value, isHead }) => (value > 0 ? `0 0 3px 3px ${isHead ? '#ff550055' : '#ff99ff55'}` : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TileFood = styled('img')`
  display: block;
  width: 90%;
  height: auto;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OverlayContainer = styled('div')`
  background-color: #00000055;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const OverlayContent = styled('div')`
  display: block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div:first-of-type {
    margin-top: 2rem;
  }

  & > div {
    margin-top: 1rem;
  }
`;

const OverlayTitle = styled('p')`
  display: block;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 3px 3px #777777;
  font-family: 'VT323', monospace;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  color: #ffffff;
`;

const RestartButton = styled('div')`
  background-color: #ffbb99;
  display: inline-block;
  padding: 0.3rem 1.5rem;
  border: 6px solid #ff5500;
  text-align: center;
  text-transform: uppercase;
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8rem;
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

const QuitButton = styled('div')`
  background-color: #ffbb99;
  display: inline-block;
  padding: 0.3rem 1.5rem;
  border: 6px solid #ff5500;
  text-align: center;
  text-transform: uppercase;
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8rem;
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
  TileContainer,
  Tile,
  TileFood,
  OverlayContainer,
  OverlayContent,
  OverlayTitle,
  RestartButton,
  QuitButton,
};
