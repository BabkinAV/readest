import styled from 'styled-components';

export const StyledSidebar = styled.div`
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
        z-index: -10;
        transform: translateY(-50%);
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
        background-color: transparent;
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
`;
