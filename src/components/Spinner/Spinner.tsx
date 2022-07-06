import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSpinner } from './Spinner.styles';


const Spinner = () => {
  return (
    <StyledSpinner className='spinner'>
         <FontAwesomeIcon icon={['fas', 'spinner']} />
    </StyledSpinner>
  );
};

export default Spinner;
