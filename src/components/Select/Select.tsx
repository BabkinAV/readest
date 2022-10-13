import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSelect } from './Select.styles';

type Props = {
  children: JSX.Element | JSX.Element[];
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	className?: string;
	name: string;
	id?: string;

};

const Select = ({ children, onSelectChange, className, name, id }: Props) => {
  return (
    <StyledSelect className={className}>
      <FontAwesomeIcon icon={['fas', 'caret-down']} />
      <select name={name} id={id} onChange={onSelectChange}>
        {children}
      </select>
    </StyledSelect>
  );
};

export default Select;
