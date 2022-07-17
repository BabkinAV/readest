import styled from 'styled-components';

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  background: ${(props) => props.theme.colors.green};
  border: 2px solid ${(props) => props.theme.colors.green};
  color: #fff;
  display: inline-block;
  padding: 0 16px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 19px;
  font-weight: 300;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
  letter-spacing: normal;
  &:hover,
  &:active {
    opacity: 0.75;
    transition: opacity 0.3s;
  }

  &.outlined {
    color: ${(props) => props.theme.colors.green};
    background: #fff;
  }
  .spinner {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  &.loading {
    color: transparent;
  }
`;
