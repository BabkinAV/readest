import { FC, useState } from 'react';

//Redux stuff
import { useAppDispatch } from '../../../../store/hooks';
import { addFilter } from '../../../../store/slices/bookSlice';

//Transition-modules stuff
import { Transition } from 'react-transition-group';
import { StyledFilterBlock } from './FilterBlock.styles';
import { AnimatedUl } from './AnimatedUl.styles';

import StarRating from '../StarRating/StarRating';

type FilterBlockProps = {
  items: (string | number)[];
  category: 'author' | 'rating' | 'year';
};

const FilterBlock: FC<FilterBlockProps> = ({ items, category }) => {
  const dispatch = useAppDispatch();

  const [additionalBlockSegmentsIsShown, setAdditionalBlockSegmentsIsShown] =
    useState<boolean>(false);
  const onMoreClickHandler = () => {
    setAdditionalBlockSegmentsIsShown((prevState) => !prevState);
  };
  const title =
    category === 'year'
      ? 'Year read'
      : category === 'rating'
      ? 'My rating'
      : 'author';
  return (
    <StyledFilterBlock className="filterBlock">
      <div className="filterBlock__header">{title.toUpperCase()}</div>
      <div className="filterBlock__body">
        <div className="filterBlock__selection">
          <ul className="filterBlock__list">
            {items.slice(0, 5).map((el) => (
              <li
                key={items.indexOf(el)}
                onClick={() => {
                  dispatch(addFilter({ category, value: el }));
                }}
              >
                {category === 'rating' ? (
                  <StarRating rating={el as number} />
                ) : (
                  <span>{el}</span>
                )}
              </li>
            ))}
          </ul>

          <Transition
            in={additionalBlockSegmentsIsShown}
            timeout={{
              appear: 1000,
              enter: 0,
              exit: 1000,
            }}
            classNames="filterBlock__list"
            unmountOnExit
            mountOnEnter
          >
            {(state) => {
              const ulHeight: number = 170; //height of the hidden Author section
              return (
                <AnimatedUl
                  className="filterBlock__list"
                  transitionState={state}
                  UlHeight={ulHeight}
                >
                  {items.slice(5).map((el) => (
                    <li
                      key={items.indexOf(el)}
                      onClick={() => {
                        dispatch(addFilter({ category, value: el }));
                      }}
                    >
                      <span>{el}</span>
                    </li>
                  ))}
                </AnimatedUl>
              );
            }}
          </Transition>
        </div>
        {items.length > 5 && (
          <div className="filterBlock__trigger">
            <span onClick={onMoreClickHandler}>
              {additionalBlockSegmentsIsShown ? 'less' : 'more'}
            </span>
          </div>
        )}
      </div>
    </StyledFilterBlock>
  );
};

export default FilterBlock;
