import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledStarRatingInput } from './StarRatingInput.styles';

const StarRatingInput:React.FC<{rating: number, onStarClick: (rating:number) => void}> = ({rating, onStarClick}) => {
  const [hover, setHover] = useState(0);

  return (
    <StyledStarRatingInput>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
						aria-label='score'
            onClick={() => onStarClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= ((hover) || rating) ? (
              <FontAwesomeIcon icon={['fas', 'star']} />
            ) : (
              <FontAwesomeIcon icon={['far', 'star']} />
            )}
          </button>
        );
      })}
    </StyledStarRatingInput>
  );
};

export default StarRatingInput;
