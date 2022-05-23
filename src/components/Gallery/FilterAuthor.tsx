import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { StyledFilterAuthor } from './FilterAuthor.styles';

type FilterAuthorProps = {
  authors: string[];
};

const FilterAuthor: FC<FilterAuthorProps> = ({ authors }) => {
  const [
    additionalAuthorsSegmentsIsShown,
    setAdditionalAuthorsSegmentsIsShown,
  ] = useState<boolean>(false);
  const onMoreClickHandler = () => {
    setAdditionalAuthorsSegmentsIsShown((prevState) => !prevState);
  };
  return (
    <StyledFilterAuthor className="filterAuthor">
      <div className="filterAuthor__header">Author</div>
      <div className="filterAuthor__body">
        <div className="filterAuthor__selection">
          <ul className="filterAuthor__list">
            {authors.slice(0, 5).map((el) => (
              <li key={authors.indexOf(el)}>
                <span>{el}</span>
              </li>
            ))}
          </ul>
          <CSSTransition
            in={additionalAuthorsSegmentsIsShown}
            timeout={600}
            classNames="filterAuthor__list"
            unmountOnExit
          >
            <ul className="filterAuthor__list">
              {authors.slice(5).map((el) => (
                <li key={authors.indexOf(el)}>
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </CSSTransition>
        </div>
        <div className="filterAuthor__trigger">
          <span onClick={() => onMoreClickHandler()}>
            {additionalAuthorsSegmentsIsShown ? 'less' : 'more'}
          </span>
        </div>
      </div>
    </StyledFilterAuthor>
  );
};

export default FilterAuthor;
