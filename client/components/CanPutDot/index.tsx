import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { countAtom } from '@atoms/';

const Dot = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);
  box-shadow: 0 0 0.5rem red;
`;

const index = () => {
  const [, setCount] = useAtom(countAtom);

  useEffect(() => {
    setCount((c) => c + 1);
    return () => {
      setCount((c) => c - 1);
    };
  }, []);

  return <Dot />;
};

export default index;
