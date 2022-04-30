import React from 'react';
import { Wrapper } from './TopNavigation.styles';

const TopNavigation = () => {
  return (
    <Wrapper className="navigation">
      <ul>
        <li>My Books</li>
        <li>Search for new Book</li>
        <li>Add custom Book</li>
      </ul>
    </Wrapper>
  );
};

export default TopNavigation;
