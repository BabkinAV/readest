import styled from 'styled-components';

export const StyledFilterBlock = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  .filterBlock__header {
    color: red;
    padding: 13px 16px;
    background-color: grey;
    text-transform: uppercase;
    font-weight: 300;
    color: #000;
    background: #e2e2e2;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1px;
  }

    .filterBlock__list,
    .filterBlock__trigger {
      padding-left: 30px;
      font-size: 15px;
      font-weight: 300;
      line-height: 17px;
      color: #000;
      font-style: italic;
    }
    .filterBlock__trigger {
      font-weight: 600;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }

    }
    .filterBlock__list {
      margin: 0;
      list-style: none;
      cursor: pointer;
      & li {
        padding: 3px 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }
`;
