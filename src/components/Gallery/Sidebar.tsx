import React, {FC} from 'react';

import  { SortType } from './Gallery';

type SidebarProps = {
  handleSortTypeChange: (sortType:SortType) => void
}

const Sidebar:FC<SidebarProps> = ({handleSortTypeChange}) => {
  return (
    <div className="sidebar">
      <div className="sort">
        <label className='sort__label' htmlFor="sort-select">Sort by:</label>

        <select name="sort__dropdown" id="sort-select" onChange={(e) => handleSortTypeChange(e.target.value as SortType)}>
          <option value="">--Please choose--</option>
          <option value="Title">Title</option>
          <option value="Author l-f">Author</option>
          <option value="My Rating">Rating</option>
          <option value="Date Read">Read Date</option>
        </select>
      </div>
      <ul>
        <li>Filters</li>
        <li>Ratings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
