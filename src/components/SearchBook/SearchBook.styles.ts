import styled from 'styled-components';

export const Wrapper = styled.div`
  .search {
    &__title,
    &__results-text {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.primary};
      padding-top: 20px;
      padding-bottom: 20px;
    }

    &__outer {
      margin-bottom: 80px;
      padding: 0 40px;
    }

		@media screen and (max-width: 768px) {
			&__outer {
				margin-bottom: 30px;
			}
		}

    &__gallery .infinite-scroll-component {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 15px;
    }

    &__spinner {
      position: relative;
      height: 30px;
      .spinner {
        position: absolute;
        left: 100px;
      }
    }
  }

  .search-form {
    &__content {
      display: flex;
      justify-content: start;
    }
    &__input-wrapper {
      margin-right: 80px;
    }
    @media screen and (max-width: 992px) {
      &__input-wrapper {
        margin-right: 40px;
      }
    }

    &__input {
      border: 1px solid #336b75;
      height: 35px;
      width: 300px;
      padding: 5px 9px;
    }
    &__button {
      width: 40px;
      height: 35px;
      background: #336b75;
      padding: 0;
      border: 1px solid #336b75;
      border-left: none;
      cursor: pointer;
      svg {
        color: #fff;
      }
    }
    @media screen and (max-width: 768px) {
      &__content {
        flex-direction: column;
      }
      &__input-wrapper {
        margin-right: 0;
        margin-bottom: 50px;
      }
      &__input {
        width: calc(100% - 40px);
      }
    }
  }
`;
