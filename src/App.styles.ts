import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box
        
    }
    
    h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
    
    
    `;

export const Container = styled.div`
  max-width: 1320px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
`;
