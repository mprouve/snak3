import React, { ReactNode, FC } from 'react';
import Styled, { IBaseIconStylesProps } from './BaseIcon.styles';

export type TBaseIconHandleOnIconClick = () => void;
export type TBaseIconHandleOnClickEvent = (event: React.MouseEvent<HTMLDivElement>) => void;

export interface IBaseIconProps extends IBaseIconStylesProps {
  icon: ReactNode;
  value?: string;
  onClick?: TBaseIconHandleOnClickEvent | TBaseIconHandleOnIconClick;
  style?: React.CSSProperties;
}

const BaseIcon: FC<IBaseIconProps> = props => {
  const { icon, value, onClick, ...restProps } = props;

  return (
    <Styled.Root data-value={value} onClick={onClick} {...restProps}>
      {icon}
    </Styled.Root>
  );
};

export default BaseIcon;
