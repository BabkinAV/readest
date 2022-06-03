import styled from 'styled-components';

export const StyledAppliedFilters = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  h3 {
    font-style: italic;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    margin: 0 0 5px 0;
  }

  .set-filter {
    margin-bottom: 20px;

    &__item {
      position: relative;
      padding: 12px 30px 13px 15px;
      margin-bottom: 5px;
      background: #e2e2e2;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      color: #666;

      svg {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
    }
  }
`;
