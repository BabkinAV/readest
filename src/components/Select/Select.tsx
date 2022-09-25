import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSelect } from './Select.styles';

type Props = {
  children: JSX.Element | JSX.Element[];
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	className?: string;

};

const Select = ({ children, onSelectChange, className }: Props) => {
  return (
    <StyledSelect className={className}>
      <FontAwesomeIcon icon={['fas', 'caret-down']} />
      <select name="sort__dropdown" id="sort-select" onChange={onSelectChange}>
        {children}
      </select>
    </StyledSelect>
  );
};

export default Select;
