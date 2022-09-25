import styled from 'styled-components';

export const StyledSidebar = styled.div.attrs((props) => ({
  className: props.className,
}))`
  h3,
  label {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .sort {
    &__label {
      display: block;
			padding-bottom: 15px;
    }
		&__select {
			margin-bottom: 15px;
		}
  }
  .filterBlock {
    padding-bottom: 30px;
  }
`;
