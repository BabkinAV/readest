import styled from 'styled-components';

export const StyledSelect = styled.div`
  width: 100%;
	position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    pointer-events: none;
  }


  select {
    padding: 5px 35px 5px 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 34px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
    width: 100%;

    option {
      white-space: pre;
    }

    &:focus {
      border: 2px solid #336b75;
    }
  }
`;

export default StyledSelect;
