import React from 'react';
import { Wrapper } from './TopNavigation.styles';

const TopNavigation = () => {
  return (
    <Wrapper>
      <ul className="navigation">
        <li className="navigation__item navigation__item--active">My Books</li>
        <li className="navigation__item">Search for new Book</li>
        <li className="navigation__item">Add custom Book</li>
      </ul>
    </Wrapper>
  );
};

export default TopNavigation;
