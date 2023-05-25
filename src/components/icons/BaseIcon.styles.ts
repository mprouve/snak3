import { CSSProperties } from 'react';
import { styled } from '@mui/material';

export interface IBaseIconStylesProps {
  direction?: string;
  responsive?: boolean;
  fill?: CSSProperties['fill'];
  stroke?: CSSProperties['stroke'];
  color?: CSSProperties['color'];
  cursor?: CSSProperties['cursor'];
  height?: CSSProperties['height'];
  hoverColor?: CSSProperties['color'];
  margin?: CSSProperties['margin'];
  opacity?: CSSProperties['opacity'];
  padding?: CSSProperties['padding'];
  width?: CSSProperties['width'];
}

const Root = styled('div')<IBaseIconStylesProps>`
  display: flex;
  position: relative;
  ${({ responsive }) => (responsive ? `svg { max-width: 100%; height: auto !important; }` : '')};
  transform: ${({ direction }) => `scale(${direction})`};

  & svg path {
    fill: ${({ fill }) => fill};
    stroke: ${({ stroke }) => stroke};
    transition: fill 0.3s ease-in;
  }

  & svg {
    fill: ${({ fill }) => fill};
    stroke: ${({ stroke }) => stroke};
    color: ${({ color }) => color};
    cursor: ${({ cursor = 'inherit' }) => cursor};
    height: ${({ height = 'initial' }) => (typeof height === 'number' ? `${height}px` : height)};
    margin: ${({ margin = 'initial' }) => margin};
    opacity: ${({ opacity = 1 }) => opacity};
    padding: ${({ padding = 'initial' }) => padding};
    width: ${({ width = 'initial' }) => (typeof width === 'number' ? `${width}px` : width)};

    &:hover {
      color: ${({ hoverColor = undefined, color = 'unset' }) => (!hoverColor ? color : hoverColor)};
      fill: ${({ hoverColor }) => hoverColor};

      path {
        fill: ${({ hoverColor }) => hoverColor};
      }
    }
  }
`;

export default { Root };
