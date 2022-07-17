import React, { ReactNode } from 'react';
import { StyledButton } from './Button.styles';
import Spinner from '../Spinner/Spinner';

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outlined?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  outlined,
  loading = false,
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`${className} ${outlined && 'outlined'} ${loading && 'loading' } `}
    >
      {loading && <Spinner color="white" />} {children}
    </StyledButton>
  );
};

export default Button;
