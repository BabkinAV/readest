import React from 'react';
import { StyledAppliedFilters } from './AppliedFilters.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppliedFilters = () => {
  return (
    <StyledAppliedFilters>
      <h3>Applied Filters</h3>
      <div className="set-filter">
        <div className="set-filter__item">
          <span>Sanderson, Brandon</span>
          <FontAwesomeIcon icon={['fas', 'xmark']} />
        </div>
      </div>
    </StyledAppliedFilters>
  );
};

export default AppliedFilters;
