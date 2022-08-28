import styled from 'styled-components';

export const StyledSingleBook = styled.div`
  padding-top: 20px;
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
        font-family: ${(props) => props.theme.fonts.primary};
        font-weight: 500;
        font-size: 28px;
        margin-bottom: 30px;
      }
    }
    &__author {
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 600;
      margin-bottom: 30px;

      span {
        
      }
      &--gold {
        color: ${(props) => props.theme.colors.gold};
        font-size: 18px;
      }
      &--snippet {
        font-size: 15px;
        line-height: 1.2;
        font-weight: 300;
      }
    }
    &__rating, &__date {
      margin-bottom: 30px;
    }
    &__date,
    &__pages {
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }
`;
