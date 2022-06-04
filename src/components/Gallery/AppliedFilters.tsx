import { StyledAppliedFilters } from './AppliedFilters.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppliedFilter } from '../../data.model';

type AppliedFiltersProps = {
  appliedFilters: AppliedFilter[];
  handleXmarkClick: (itemname: string) => void
};

const AppliedFilters = ({ appliedFilters, handleXmarkClick }: AppliedFiltersProps) => {
  return (
    <StyledAppliedFilters>
      <h3>Applied Filters</h3>
      <div className="set-filter">
        {appliedFilters.map((el) => (
          <div className="set-filter__item" key={el.value}>
            <span>{el.value}</span>
            <FontAwesomeIcon icon={['fas', 'xmark']} onClick={() => handleXmarkClick(el.value)}/>
          </div>
        ))}
      </div>
    </StyledAppliedFilters>
  );
};

export default AppliedFilters;
