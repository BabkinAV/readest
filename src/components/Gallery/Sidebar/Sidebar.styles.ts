import styled from 'styled-components';

export const StyledSidebar = styled.div`
  h3,
  label {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
  }
  .sort {
    &__label {
      display: block;
    }

    &__select {
      width: 100%;

      svg {
        position: absolute;
        right: 10px;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
        pointer-events: none;
      }

      position: relative;

      select {
        padding: 5px 35px 5px 5px;
        font-size: 16px;
        border: 1px solid #ccc;
        height: 34px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: white;
        width: 100%;

        option {
          white-space: pre;
        }



        &:focus {
          border: 2px solid #336b75;
        }
      }
    }
  }
  .filterBlock {
    padding-bottom: 30px;
  }
`;
