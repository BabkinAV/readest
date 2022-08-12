import styled from 'styled-components';

export const StyledStarRatingInput = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  button {
    font-size: 28px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.colors.goldDarker};
    }
  }
`;
