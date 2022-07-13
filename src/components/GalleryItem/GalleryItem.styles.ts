import styled from 'styled-components';

export const StyledGalleryItem = styled.div`
  .gallery-item {
    &__title {
      font-family: ${(props) => props.theme.fonts.primary};
      padding-top: 5px;
      padding-bottom: 5px;
    }
    &__author {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: bold;
      font-size: 12px;
      color: ${(props) => props.theme.color.gold};
      padding-bottom: 5px;
    }
    &__image {
      img {
        height: 200px;
        width: 135px;
      }
    }
    
    &__wrapper {
      max-width: 200px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
    }
    &__readDate {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: 14px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
`;
