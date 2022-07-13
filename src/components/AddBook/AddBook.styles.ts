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

    .addBook-form {
      &__header {
        text-align: left;
        font-family: ${(props) => props.theme.fonts.primary};

        grid-column: span 2;

        h3 {
          display: inline-block;
          border-bottom: 1px solid #c8c8c8;
          font-weight: 300;
          font-style: italic;
          text-align: left;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        &--main {
          text-align: center;
        }
      }
      &__section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 30px;
      }

      &__group {
        label {
          font-family: ${(props) => props.theme.fonts.primary};
          font-size: 15px;
          font-weight: 300;
          display: block;
          user-select: none;
          padding-bottom: 10px;
        }
        input {
          width: 90%;
          height: 12px;
          padding: 10px 12px;
          font-size: 15px;
          line-height: 22px;
          font-family: ${(props) => props.theme.fonts.primary};
          font-weight: 300;
          border: 1px solid #d1d1d1;
          text-transform: none;
          box-shadow: none;
          border-radius: 0;
          appearance: none !important;
          vertical-align: middle;
          outline: none;
          &:active,
          &:focus {
            border: 1px solid #b4b4b4;
          }
        }
        &--isbn {
          input {
            margin-bottom: 20px;
          }
        }
      }
      &__header {
      }
      &__button {
        &--save {
          margin-right: 30px;
        }
      }
    }
  }
`;
