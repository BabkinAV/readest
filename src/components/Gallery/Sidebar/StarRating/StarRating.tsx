import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledStarRating } from './StarRating.styles';

const StarRating: React.FC<{ rating: number, large?: boolean }> = ({ rating, large }) => {
  let maxRating = 5;
  return (
    <StyledStarRating className="rating" data-testid="star-rating" large={large}>
      {[...Array(rating)].map((e, i) => (
        <span className="rating__star rating__star--filled" key={i}>
          <FontAwesomeIcon icon={['fas', 'star']} />
        </span>
      ))}
      {[...Array(maxRating - rating)].map((e, i) => (
        <span className="rating__star rating__star--empty" key={i}>
          <FontAwesomeIcon icon={['far', 'star']} />
        </span>
      ))}
    </StyledStarRating>
  );
};

export default StarRating;
