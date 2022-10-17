import React from 'react';

import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by Andrey Babkin, {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
