import React, { FC } from 'react';
import { StyledFilterAuthor } from './FilterAuthor.styles';

type FilterAuthorProps = {
  authors: string[];
};

const FilterAuthor: FC<FilterAuthorProps> = ({authors}) => {
  return (
    <StyledFilterAuthor className='filterAuthor'>
      <div className="filterAuthor__header">Author</div>
      <div className="filterAuthor__body">
        <ul className="filterAuthor__list">
          {authors.slice(0,5).map((el) => (
            <li key={authors.indexOf(el)}><span>{el}</span></li>
          ))}
        </ul>
        <span>more</span>
      </div>
    </StyledFilterAuthor>
  );
};

export default FilterAuthor;
