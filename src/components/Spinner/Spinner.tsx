import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSpinner } from './Spinner.styles';

interface Props {
  color?: 'grey' | 'white';
}

const Spinner = ({color}: Props) => {
  return (
    <StyledSpinner data-testid="spinner" className='spinner' color={color}>
         <FontAwesomeIcon icon={['fas', 'spinner']} />
    </StyledSpinner>
  );
};

export default Spinner;
