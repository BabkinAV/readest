import { StyledAppliedFilters } from './AppliedFilters.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppliedFilter } from '../../data.model';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';

type AppliedFiltersProps = {
  appliedFilters: AppliedFilter[];
  handleXmarkClick: (itemname: string | number) => void;
};

const AppliedFilters = ({ appliedFilters, handleXmarkClick }: AppliedFiltersProps) => {
  return (
    <StyledAppliedFilters>
      <h3>Applied Filters</h3>
      <div className="set-filter">
        {appliedFilters.map((el) => (
          <div className="set-filter__item" key={el.value} data-testid="set-filter__item">
            {(el.category === 'rating') ? (<StarRating rating={el.value as number}/>) : (<span>{el.value}</span>)}
            
            <FontAwesomeIcon className="set-filter__xmark" icon={['fas', 'xmark']} onClick={() => handleXmarkClick(el.value )}/>
          </div>
        ))}
      </div>
    </StyledAppliedFilters>
  );
};

export default AppliedFilters;
