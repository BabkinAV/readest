import styled from 'styled-components';

export const Wrapper = styled.div`
  .gallery {
    &__container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 15px;
    }

    &__title {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.primary};
      padding-top: 20px;
      padding-bottom: 20px;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: minmax(auto, 250px) 1fr;
    }
		@media screen and (max-width: 576px) {
			&__wrapper {
				display: block;
			}
		}
  }
`;
