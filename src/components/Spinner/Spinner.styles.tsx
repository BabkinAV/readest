import styled from 'styled-components';

export const StyledSpinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.spinner {
    display: inline-block;

    svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme.color.grey};

      animation: spinner 1.5s linear infinite;
    }
  }
`;
