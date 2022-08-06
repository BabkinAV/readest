import { StyledAppliedFilters } from './AppliedFilters.styles';

//Redux stuff
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeFilter } from '../../store/slices/bookSlice';
import { bookFiltersSelector } from '../../store/slices/bookSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../Gallery/Sidebar/StarRating/StarRating';


const AppliedFilters = () => {
  const dispatch = useAppDispatch();
  const appliedFiltersArray = useAppSelector(bookFiltersSelector);
  return (
    <StyledAppliedFilters>
      <h3>Applied Filters</h3>
      <div className="set-filter">
        {appliedFiltersArray.map((el) => (
          <div
            className="set-filter__item"
            key={el.value}
            data-testid="set-filter__item"
          >
            {el.category === 'rating' ? (
              <StarRating rating={el.value as number} />
            ) : (
              <span>{el.value}</span>
            )}

            <FontAwesomeIcon
              className="set-filter__xmark"
              icon={['fas', 'xmark']}
              // onClick={() => handleXmarkClick(el.value)}
              onClick={() => dispatch(removeFilter(el.value))}
            />
          </div>
        ))}
      </div>
    </StyledAppliedFilters>
  );
};

export default AppliedFilters;
