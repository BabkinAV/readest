import React, { ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outlined?: boolean;
  // any props that come into the component
}

const Button = ({ children, onClick, className, outlined }: Props) => {
  return <StyledButton onClick={onClick} className={`${className} ${outlined ? 'outlined' : null }`}>{children}</StyledButton>;
};

export default Button;
