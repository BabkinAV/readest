import styled from 'styled-components';

export const Wrapper = styled.nav`
  .navigation {
    list-style-type: none;
    text-align: center;
    border: 1px solid #D3D3D3;
    border-left: none;
    border-right: none;
    padding-top: 12px;
    padding-bottom: 12px;
    .navigation__item {
      
      display: inline-block;
			
    }
		@media screen and (max-width: 576px) {
			.navigation__item {
				display: block;
				text-align: left;
				padding-left: 30px;
			}
			.navigation__item:not(:last-child) {
				margin-bottom: 15px;
			}
			
		}
    .navigation__item a{
      margin-right: 15px;
      color: ${(props) => props.theme.colors.green};
      text-transform: uppercase;
      padding: 4px 8px;
      transition: background 0.3s, color 0.3s;
      font-family: ${(props) => props.theme.fonts.secondary};
      cursor: pointer;

      &:hover, &.active {
        color: #fff;
        background-color: ${(props) => props.theme.colors.green};
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      
    }


  }
`;
