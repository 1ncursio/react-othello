import React from 'react';
import OthelloTable from '@components/OthelloTable';
import OthelloDetail from '@components/OthelloDetail';
import { HomeContainer } from '@pages/Home/styles';

const Home = () => {
  return (
    <HomeContainer>
      <OthelloTable />
      <OthelloDetail />
    </HomeContainer>
  );
};

export default Home;
