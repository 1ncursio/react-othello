import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { blackCountAtom, whiteCountAtom } from '@atoms/';

const Stone = styled.div<{ item: number }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ item }) => (item === 1 ? 'black' : 'white')};
`;

const index = ({ item }: { item: number }) => {
  const [blackCount, setBlackCount] = useAtom(blackCountAtom);
  const [whiteCount, setWhiteCount] = useAtom(whiteCountAtom);

  useEffect(() => {
    item === 1 ? setBlackCount((c) => c + 1) : setWhiteCount((c) => c + 1);
    return () => {
      item === 1 ? setBlackCount((c) => c - 1) : setWhiteCount((c) => c - 1);
    };
  }, [item]);

  return <Stone item={item} />;
};

export default index;
