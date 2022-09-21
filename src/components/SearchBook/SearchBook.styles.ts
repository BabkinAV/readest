import styled from "styled-components";

export const Wrapper = styled.div`
	.search {
		&__title {
			text-align: center;
			font-family: ${(props) => props.theme.fonts.primary};
      padding-top: 20px;
      padding-bottom: 20px;
		}

		&__outer {
			margin-bottom: 80px;
		}

		&__results {
			
		}

		
		
	}

	.search-form {
			&__content {
				display: flex;
				justify-content: start;
			}
			&__input-wrapper {
				margin-right: 80px;
			}
		}


	



`