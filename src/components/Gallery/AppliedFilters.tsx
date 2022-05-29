import React from 'react';
import { StyledAppliedFilters } from './AppliedFilters.styles';

const AppliedFilters = () => {
  return (
    <StyledAppliedFilters>
      <h3>Applied Filters</h3>
      <div className="set-filter">
        <div className="set-filter__item">
          <span>Sanderson, Brandon</span>
        </div>
      </div>
    </StyledAppliedFilters>
  );
};

export default AppliedFilters;
