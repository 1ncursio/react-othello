import React, { useCallback, useEffect, useState } from 'react';
import { Item, Row, Stone } from './styles';

const OthelloTable = () => {
  const [cells, setCells] = useState(Array(8).fill(Array(8).fill(0)));
  const [isBlackTurn, setIsBlackTurn] = useState(true);

  useEffect(() => {
    setCells((prev) => [...prev.slice(0, 3), [0, 0, 0, 2, 1, 0, 0, 0], [0, 0, 0, 1, 2, 0, 0, 0], ...prev.slice(5)]);
  }, []);

  const canPut = (x: number, y: number, item: number) => {
    if (item !== 0) return false;
    return checkRightCells(x, y, item);
  };

  const checkRightCells = (x: number, y: number, item: number): boolean => {
    // x축 체크하면서 이어진 곳에 다른 돌이 있는가 체크// 만약 중간에 비었으면 return//
    // item = 원래 돌의 색 1 = 검정, 2 = 흰색
    // 바로 옆 돌이 자신의 돌이면 return false
    if (item == cells[y][x + 1]) {
      return false;
    }
    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = x + 1; i < cells[y].length; i++) {
      if (cells[y][i] === 0) {
        return false;
      } else if (cells[y][i] === item) {
        return true;
      }
    }
    return true;
  };

  const onClickCell = useCallback(
    (x: number, y: number, item: number) => {
      if (!canPut(x, y, item)) {
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
      console.log(x, y, item);
    },
    [cells]
  );

  return (
    <>
      {cells.map((row: number[], y) => (
        <Row key={y}>
          {row.map((item: number, x) => (
            <Item onClick={() => onClickCell(x, y, item)} key={x}>
              {!(item === 0) && <Stone item={item} />}
            </Item>
          ))}
        </Row>
      ))}
    </>
  );
};

export default OthelloTable;
