import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding: 50px 0;
`;

const AppHeader = () => {
  return (
    <header>
      <Logo src={require('./logo.svg')} alt='logo'/>
    </header>
  )
};

export default AppHeader