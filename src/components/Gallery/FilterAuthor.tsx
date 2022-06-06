import  { FC, useState } from 'react';
import { Transition } from 'react-transition-group';
import { StyledFilterAuthor } from './FilterAuthor.styles';
import {AnimatedUl} from './AnimatedUl.styles'

type FilterAuthorProps = {
  authors: string[];
  onAuthorClick: (p:string) => void;
};



const FilterAuthor: FC<FilterAuthorProps> = ({ authors, onAuthorClick }) => {
  
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
              <li key={authors.indexOf(el)} onClick={()=> onAuthorClick(el)}>
                <span>{el}</span>
              </li>
            ))}
          </ul>
         
          <Transition
            in={additionalAuthorsSegmentsIsShown}
            timeout={{
              appear: 1000,
              enter: 0,
              exit: 1000,
            }}
            classNames="filterAuthor__list"
            unmountOnExit
            mountOnEnter
          >
            {(state) => {
              const ulHeight: number = 170; //height of the hidden Author section
              return (
                <AnimatedUl
                  className="filterAuthor__list"
                  transitionState={state}
                  UlHeight={ulHeight}
                >
                  {authors.slice(5).map((el) => (
                    <li key={authors.indexOf(el)} onClick={()=> onAuthorClick(el)}>
                      <span>{el}</span>
                    </li>
                  ))}
                </AnimatedUl>
              );
            }}
          </Transition>
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
