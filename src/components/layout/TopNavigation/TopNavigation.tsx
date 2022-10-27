import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './TopNavigation.styles';

const TopNavigation = () => {
  return (
    <Wrapper>
      <ul className="navigation">
        <li className="navigation__item navigation__item--active">
          <NavLink to="/">My Books</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/search">Search for new Book</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/add">Add Book</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default TopNavigation;
