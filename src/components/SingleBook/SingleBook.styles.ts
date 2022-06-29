import styled from 'styled-components';

export const StyledSingleBook = styled.div`
  .singleBook {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    &__image {
      max-width: 300px;

      img {
        width: 100%;
      }
    }
    &__info {
      h1 {
        font-family: 'Source Sans Pro', Arial, sans-serif;
        font-weight: 500;
        font-size: 28px;
        margin-bottom: 30px;
      }
    }
    &__author {
      font-family: 'Source Sans Pro', Arial, sans-serif;
      margin-bottom: 30px;
      &--gold {
        color: ${(props) => props.theme.color.gold};
        font-size: 18px;
      }
      &--snippet {
        font-size: 15px;
        line-height: 1.2;
        font-weight: 300;
      }
    }
    &__rating {
      margin-bottom: 30px;
    }
    &__date {
      font-family: 'Nunito Sans', sans-serif;
    }
  }
`;
