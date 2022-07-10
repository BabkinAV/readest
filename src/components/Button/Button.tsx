import React, { ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  // any props that come into the component
}

const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
