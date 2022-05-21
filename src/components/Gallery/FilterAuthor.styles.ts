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
  .filterAuthor__list {
    list-style: none;
    cursor: pointer;
    & li {
      padding: 3px 0;
      font-size: 15px;
      font-weight: 300;
      line-height: 17px;
      text-decoration: none;
      color: #000;
      font-style: italic;
      
    }
  }
`;
