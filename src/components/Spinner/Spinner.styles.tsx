import styled from 'styled-components';

interface Props {
  color?: 'grey' | 'white';
}


export const StyledSpinner = styled.div<Props>`
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
      color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.grey};

      animation: spinner 1.5s linear infinite;
    }
  }
`;
