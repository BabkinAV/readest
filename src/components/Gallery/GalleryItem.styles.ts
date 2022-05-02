import styled from 'styled-components';

export const StyledGalleryItem = styled.div`
  .gallery-item {
    &__image {
      img {
        height: 200px;
        width: 135px;
      }
    }
    &__wrapper {
      max-width: 180px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
    }
  }
`;
