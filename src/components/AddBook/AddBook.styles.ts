import styled from 'styled-components';

export const StyledAddBook = styled.div`
  .addBook {
    padding-top: 20px;
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
        padding-top: 15px;
        padding-bottom: 15px;

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
        &--review {
          margin-bottom: 40px;
        }
      }

      &__group {
        position: relative;
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
          padding: 8px 12px;
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
            margin-bottom: 40px;
          }
        }

        &.hasError {
          label {
            color: #ff0000;
          }
          input {
            border: 1px solid #ff0000
          }
        }

        span.error {
          position: absolute;
          left: 0;
          top: 75px;
          border: 10px;
          color: #ff0000;
          font-size: 14px;
          font-family: ${(props) => props.theme.fonts.primary};
          
        }

      }
      &__info {
        padding-bottom: 10px;
        font-family: ${(props) => props.theme.fonts.primary};
        font-size: 14px;
        font-weight: 400;

      }
      &__button {
        &--save {
          margin-right: 30px;
        }
      }
    }
  }
`;
