import React from 'react';

//Redux stuff

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { sortData } from '../../../store/slices/bookSlice';
import {
  bookFiltersSelector,
  authorsSelector,
  ratingsSelector,
  yearsSelector,
} from '../../../store/slices/bookSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledSidebar } from './Sidebar.styles';

import { SortType } from '../../../data.model';
import FilterBlock from './FilterBlock/FilterBlock';
import AppliedFilters from '../../AppliedFilters/AppliedFilters';

const Sidebar = () => {
  const appliedFiltersArray = useAppSelector(bookFiltersSelector);
  const authors = useAppSelector(authorsSelector);
  const yearsRead = useAppSelector(yearsSelector);
  const ratings = useAppSelector(ratingsSelector);

  const dispatch = useAppDispatch();
  return (
    <StyledSidebar className="sidebar">
      {appliedFiltersArray.length > 0 && <AppliedFilters />}
      <div className="sort">
        <label className="sort__label" htmlFor="sort-select">
          Sort by:
        </label>

        <div className="sort__select">
          <FontAwesomeIcon icon={['fas', 'caret-down']} />
          <select
            name="sort__dropdown"
            id="sort-select"
            onChange={(e) => {
              dispatch(sortData(e.target.value as SortType));
            }}
          >
            <option value="">--Please choose--</option>
            <option value="Title">Title</option>
            <option value="Author l-f">Author</option>
            <option value="My Rating">Rating</option>
            <option value="Date Read">Read Date</option>
          </select>
        </div>
      </div>

      <h3>Choose filters:</h3>
      <FilterBlock items={authors} category="author" />
      <FilterBlock items={ratings} category="rating" />
      <FilterBlock items={yearsRead} category="year" />
    </StyledSidebar>
  );
};

export default Sidebar;
