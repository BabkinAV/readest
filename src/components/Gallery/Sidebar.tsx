import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledSidebar } from './Sidebar.styles';

import { SortType } from './Gallery';
import FilterBlock from './FilterBlock/FilterBlock';
import AppliedFilters from './AppliedFilters';
import { AppliedFilter } from '../../data.model';

type SidebarProps = {
  handleSortTypeChange: (sortType: SortType) => void;
  authors: string[];
  ratings: number[];
  appliedFilters: AppliedFilter[];
  handleXmarkClick: (p: string | number) => void;
  handleFilterClick: (p: AppliedFilter) => void;
  yearsRead: string[];
};

const Sidebar: FC<SidebarProps> = ({
  handleSortTypeChange,
  authors,
  ratings,
  yearsRead,
  appliedFilters,
  handleXmarkClick,
  handleFilterClick,
}) => {
  return (
    <StyledSidebar className="sidebar">
      {appliedFilters.length > 0 && (
        <AppliedFilters
          appliedFilters={appliedFilters}
          handleXmarkClick={handleXmarkClick}
        />
      )}
      <div className="sort">
        <label className="sort__label" htmlFor="sort-select">
          Sort by:
        </label>

        <div className="sort__select">
          <FontAwesomeIcon icon={['fas', 'caret-down']} />
          <select
            name="sort__dropdown"
            id="sort-select"
            onChange={(e) => handleSortTypeChange(e.target.value as SortType)}
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
      <FilterBlock
        items={authors}
        category="author"
        onFilterClick={handleFilterClick}
      />
      <FilterBlock
        items={ratings}
        category="rating"
        onFilterClick={handleFilterClick}
      />
      <FilterBlock
        items={yearsRead}
        category="year"
        onFilterClick={handleFilterClick}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
