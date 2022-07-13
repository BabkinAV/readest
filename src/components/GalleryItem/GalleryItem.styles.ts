import styled from 'styled-components';

export const StyledGalleryItem = styled.div`
  .gallery-item {
    &__title {
      font-family: ${(props) => props.theme.fonts.primary};
    }
    &__author {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: bold;
      font-size: 12px;
      color: ${(props) => props.theme.color.gold};
    }
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
    &__readDate {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 14px;
    }
  }
`;
