import styled from 'styled-components';

export const StyledFilterAuthor = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  .filterAuthor__header {
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

    .filterAuthor__list,
    .filterAuthor__trigger {
      padding-left: 30px;
      font-size: 15px;
      font-weight: 300;
      line-height: 17px;
      color: #000;
      font-style: italic;
    }
    .filterAuthor__trigger {
      font-weight: 600;
    }
    .filterAuthor__list {
      margin: 0;
      list-style: none;
      cursor: pointer;
      & li {
        padding: 3px 0;

        text-decoration: none;
      }
    }
`;
