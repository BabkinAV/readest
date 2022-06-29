import styled from 'styled-components';

interface Props {
  large?: boolean;
}

export const StyledStarRating = styled.div<Props>`
  font-size: ${(props) => (props.large ? '24px' : '16px')};

  .rating {
    &__star {
      color: #ff9933;
    }
  }
`;
