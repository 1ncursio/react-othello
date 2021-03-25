import { canPut } from '@utils/othello';
import React, { useCallback, useEffect, useState } from 'react';
import { Item, Row, ShowCanPut, Stone } from './styles';
import { atom, useAtom } from 'jotai';

export const cellsAtom = atom(Array(8).fill(Array(8).fill(0)));

const OthelloTable = () => {
  // const [cells, setCells] = useState(Array(8).fill(Array(8).fill(0)));
  const [cells, setCells] = useAtom(cellsAtom);
  const [isBlackTurn, setIsBlackTurn] = useState(true);

  useEffect(() => {
    // 초기 돌 세팅
    setCells((prev) => [...prev.slice(0, 3), [0, 0, 0, 1, 2, 0, 0, 0], [0, 0, 0, 2, 1, 0, 0, 0], ...prev.slice(5)]);
  }, []);

  const onClickCell = useCallback(
    (x: number, y: number) => {
      console.log(x, y);
      const turn = isBlackTurn ? 1 : 2;
      if (!canPut(x, y, cells, turn, setCells)) {
        console.log('못놓음ㅋ');
        return;
      }

      const num = isBlackTurn ? 1 : 2;
      setCells((prev) => [...prev.slice(0, y), [...prev[y].slice(0, x), num, ...prev[y].slice(x + 1)], ...prev.slice(y + 1)]);
      setIsBlackTurn((prev) => !prev);
      if (isBlackTurn) {
        console.log('Black turn');
      } else {
        console.log('White turn');
      }
    },
    [cells, isBlackTurn]
  );

  return (
    <div>
      <h1>{isBlackTurn ? 'Black Turn' : 'White Turn'}</h1>
      {cells.map((row: number[], y) => (
        <Row key={y}>
          {row.map((item: number, x) => (
            <Item onClick={() => onClickCell(x, y)} key={x}>
              {item === 0 ? canPut(x, y, cells, isBlackTurn ? 1 : 2, setCells) && <ShowCanPut /> : <Stone item={item} />}
            </Item>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default OthelloTable;
