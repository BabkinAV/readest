import styled from 'styled-components';

export const Wrapper = styled.div`
  .gallery {
    &__container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 15px;
    }
    &__title {
      text-align: center;
      font-family: 'Source Sans Pro', sans-serif;


    }

    &__wrapper {
      display: grid;
      grid-template-columns: 250px 1fr;
    }

    
  }

`;
