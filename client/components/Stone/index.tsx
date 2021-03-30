import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { blackCountAtom, isFinishedAtom, turnCountAtom, whiteCountAtom } from '@atoms/';

const Stone = styled.div<{ item: number }>`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: ${({ item }) => (item === 1 ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.7);

  div {
    width: 70%;
    height: 70%;
    border: 1px solid ${({ item }) => (item !== 1 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)')};
    border-radius: 50%;
  }
`;

const index = ({ item }: { item: number }) => {
  const [blackCount, setBlackCount] = useAtom(blackCountAtom);
  const [whiteCount, setWhiteCount] = useAtom(whiteCountAtom);
  const [turnCount, setTurnCount] = useAtom(turnCountAtom);
  const [isFinished, setIsFinished] = useAtom(isFinishedAtom);

  useEffect(() => {
    item === 1 ? setBlackCount((c) => c + 1) : setWhiteCount((c) => c + 1);
    return () => {
      item === 1 ? setBlackCount((c) => c - 1) : setWhiteCount((c) => c - 1);
    };
  }, [item]);

  useEffect(() => {
    if (turnCount > 0) {
      if (whiteCount * blackCount === 0 || whiteCount + blackCount === 64) setIsFinished(true);
    }
  }, [turnCount, whiteCount, blackCount]);

  return (
    <Stone item={item}>
      <div />
    </Stone>
  );
};

export default index;
