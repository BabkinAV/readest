import styled from 'styled-components';

export const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  /* box-sizing: border-box; */
  background: ${(props) => props.theme.color.green};
  border: 2px solid ${(props) => props.theme.color.green};
  color: #fff;
  display: inline-block;
  /* border: none; */
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
    color: ${(props) => props.theme.color.green};
    background: #fff;
  }
`;
