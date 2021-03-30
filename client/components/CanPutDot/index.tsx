import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { countAtom } from '@atoms/';

const Dot = styled.div`
  cursor: pointer;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: rgba(36, 36, 36, 0.3);
  box-shadow: 0 0 0.3rem (36, 36, 36, 0.5);
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
