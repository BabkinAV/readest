import React, { FC } from 'react';
import { StyledSearchItem } from './SearchItem.styles';
import emptyCover from '../../../assets/images/emptyCover_sm.png';

type SearchItemProps = {
  key: string;
  title: string;
  author: string;
  coverId: number;
};

const SearchItem: FC<SearchItemProps> = ({
  title,
  author,
  coverId,
}) => {
  return (
    <StyledSearchItem className="search-item">
      <div className="search-item__wrapper">
        <div className="search-item__image">
          
            <img
              src={coverId === 0 ? emptyCover :`https://covers.openlibrary.org/b/id/${coverId}-M.jpg?default=false`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=emptyCover;
              }}
              alt={`${title} cover`}
            />
          
        </div>
        <div className="search-item__title">
          <span>
            {title.length > 22 ? `${title.substring(0, 22)}...` : title}
          </span>
        </div>
        <div className="search-item__author">
          <span>{author}</span>
        </div>
        
      </div>
    </StyledSearchItem>
  );
};

export default SearchItem;
