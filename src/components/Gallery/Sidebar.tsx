import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledSidebar } from './Sidebar.styles';

import { SortType } from './Gallery';
import FilterAuthor from './FilterAuthor';

type SidebarProps = {
  handleSortTypeChange: (sortType: SortType) => void;
  authors: string[];
};

const Sidebar: FC<SidebarProps> = ({ handleSortTypeChange, authors }) => {
  return (
    <StyledSidebar className="sidebar">
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
      <FilterAuthor authors={authors}/>
      <div style={{marginTop: '50px'}}>Ratings filter</div>
      <div style={{marginTop: '50px'}}>Read Year filter</div>
    </StyledSidebar>
  );
};

export default Sidebar;
