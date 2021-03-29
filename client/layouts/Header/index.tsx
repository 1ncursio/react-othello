import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  h1 {
    margin: 0;
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
