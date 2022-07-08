import styled from 'styled-components';

export const StyledAddBook = styled.div`
  .addBook {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    &__image {
      max-width: 300px;

      img {
        width: 100%;
      }
    }
  }
`;
