import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const index = () => {
  return (
    <Header>
      <h1>React Othello</h1>
    </Header>
  );
};

export default index;
