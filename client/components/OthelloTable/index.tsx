import React, { useCallback, useEffect, useState } from 'react';
import { Item, Row, Stone } from './styles';
import { atom, useAtom } from 'jotai';
import produce from 'immer';
import CanPutDot from '@components/CanPutDot';
import { countAtom, cellsAtom } from '@atoms/';

const OthelloTable = () => {
  const [cells, setCells] = useAtom(cellsAtom);
  const [isBlackTurn, setIsBlackTurn] = useState(true);
  const [count] = useAtom(countAtom);

  useEffect(() => {
    // 초기 돌 세팅
    setCells(
      produce((draft) => {
        [draft[3][3], draft[3][4]] = [1, 2];
        [draft[4][3], draft[4][4]] = [2, 1];
      })
    );
  }, []);

  useEffect(() => {
    if (count === 0) setIsBlackTurn((prev) => !prev);
  }, [count]);

  const canPut = (x: number, y: number, stoneId: number, turn: boolean = true) => {
    // 이미 돌이 있다면 return false
    if (cells[y][x] !== 0) return false;

    const canTurnOverRight = checkRightCells(x, y, stoneId, turn);
    const canTurnOverLeft = checkLeftCells(x, y, stoneId, turn);
    const canTurnOverUp = checkUpCells(x, y, stoneId, turn);
    const canTurnOverDown = checkDownCells(x, y, stoneId, turn);
    const canTurnOverRightDown = checkRightDownCells(x, y, stoneId, turn);
    const canTurnOverLeftUp = checkLeftUpCells(x, y, stoneId, turn);
    const canTurnOverRightUp = checkRightUpCells(x, y, stoneId, turn);
    const canTurnOverLeftDown = checkLeftDownCells(x, y, stoneId, turn);

    return (
      canTurnOverRight ||
      canTurnOverLeft ||
      canTurnOverUp ||
      canTurnOverDown ||
      canTurnOverRightDown ||
      canTurnOverLeftUp ||
      canTurnOverRightUp ||
      canTurnOverLeftDown
    );
  };

  const checkRightCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 맨 오른쪽 돌이면 false
    if (x === cells[y].length - 1) return false;

    // 바로 옆 돌이 자신의 돌이면 false
    if (stoneId === cells[y][x + 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 false
    for (let i = x + 1; i < cells[y].length; i++) {
      if (cells[y][i] === 0) {
        return false;
      }

      if (cells[y][i] === stoneId) {
        if (turn) {
          console.log('오른쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
          setCells(
            produce((draft) => {
              for (let X = x; X < i; X++) draft[y][X] = stoneId;
            })
          );
        }

        return true;
      }
    }
    return false;
  };

  const checkLeftCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 맨 왼쪽 돌이면 false
    if (x === 0) return false;

    // 바로 옆 돌이 자신의 돌이면 false
    if (stoneId === cells[y][x - 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 false
    for (let i = x - 1; i >= 0; i--) {
      if (cells[y][i] === 0) {
        return false;
      }

      if (cells[y][i] === stoneId) {
        if (turn) {
          console.log('checkLeftCells 왼쪽 중간에 다른 돌이 있고 그 돌이 나랑같음 true');
          setCells(
            produce((draft) => {
              for (let X = x; X >= i; X--) draft[y][X] = stoneId;
            })
          );
        }

        return true;
      }
    }
    return false;
  };

  const checkUpCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (y === 0) return false;

    if (stoneId === cells[y - 1][x]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y - 1; i >= 0; i--) {
      if (cells[i][x] === 0) {
        return false;
      }
      if (cells[i][x] === stoneId) {
        if (turn) {
          console.log('위쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
          setCells(
            produce((draft) => {
              for (let Y = y; Y >= i; Y--) draft[Y][x] = stoneId;
            })
          );
        }

        return true;
      }
    }
    return false;
  };

  const checkDownCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (y === cells[y].length - 1) return false;

    if (stoneId === cells[y + 1][x]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y + 1; i < cells.length; i++) {
      if (cells[i][x] === 0) {
        return false;
      }
      if (cells[i][x] === stoneId) {
        if (turn) {
          console.log('밑쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
          setCells(
            produce((draft) => {
              for (let Y = y; Y < i; Y++) draft[Y][x] = stoneId;
            })
          );
        }
        return true;
      }
    }
    return false;
  };

  const checkRightDownCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (x === cells[y].length - 1 || y === cells.length - 1) return false;

    if (stoneId === cells[y + 1][x + 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y + 1; i < cells.length; i++) {
      for (let j = x + 1; j < cells[y].length; j++) {
        if (i - j === y - x) {
          if (cells[i][j] === 0) {
            return false;
          }
          if (cells[i][j] === stoneId) {
            if (turn) {
              console.log('오른쪽 밑 중간에 다른 돌이 있고 그 돌이 나랑같음');
              setCells(
                produce((draft) => {
                  for (let Y = y; Y < i; Y++) for (let X = x; X < j; X++) if (Y - X === y - x) draft[Y][X] = stoneId;
                })
              );
            }

            return true;
          }
        }
      }
    }
    return false;
  };

  const checkLeftUpCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (x === 0 || y === 0) return false;

    if (stoneId === cells[y - 1][x - 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y - 1; i >= 0; i--) {
      for (let j = x - 1; j >= 0; j--) {
        if (i - j === y - x) {
          if (cells[i][j] === 0) {
            return false;
          }
          if (cells[i][j] === stoneId) {
            if (turn) {
              console.log('왼쪽 위 중간에 다른 돌이 있고 그 돌이 나랑같음');
              setCells(
                produce((draft) => {
                  for (let Y = y; Y >= i; Y--) for (let X = x; X >= j; X--) if (Y - X === y - x) draft[Y][X] = stoneId;
                })
              );
            }

            return true;
          }
        }
      }
    }
    return false;
  };

  const checkRightUpCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (x === cells[y].length || y === 0) return false;

    if (stoneId === cells[y - 1][x + 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y - 1; i >= 0; i--) {
      for (let j = x + 1; j < cells[i].length; j++) {
        if (i + j === y + x) {
          if (cells[i][j] === 0) {
            return false;
          }
          if (cells[i][j] === stoneId) {
            if (turn) {
              console.log('오른 위 중간에 다른 돌이 있고 그 돌이 나랑같음');
              setCells(
                produce((draft) => {
                  for (let Y = y; Y >= i; Y--) for (let X = x; X < j; X++) if (Y + X === y + x) draft[Y][X] = stoneId;
                })
              );
            }

            return true;
          }
        }
      }
    }
    return false;
  };

  const checkLeftDownCells = (x: number, y: number, stoneId: number, turn: boolean): boolean => {
    // 바로 옆 돌이 자신의 돌이면 return false
    if (x === 0 || y === cells.length - 1) return false;

    if (stoneId === cells[y + 1][x - 1]) return false;

    // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
    for (let i = y + 1; i < cells.length; i++) {
      for (let j = x - 1; j >= 0; j--) {
        if (i + j === y + x) {
          if (cells[i][j] === 0) {
            return false;
          }
          if (cells[i][j] === stoneId) {
            if (turn) {
              console.log('왼쪽 밑 중간에 다른 돌이 있고 그 돌이 나랑같음');
              setCells(
                produce((draft) => {
                  for (let Y = y; Y < i; Y++) for (let X = x; X >= j; X--) if (Y + X === y + x) draft[Y][X] = stoneId;
                })
              );
            }

            return true;
          }
        }
      }
    }
    console.log('ㄲㅈ');
    return false;
  };

  const onClickCell = useCallback(
    (x: number, y: number) => {
      const stoneId = isBlackTurn ? 1 : 2;
      console.log(x, y);
      if (!canPut(x, y, stoneId)) return;

      setCells(
        produce((draft) => {
          draft[y][x] = stoneId;
        })
      );

      console.log(count);
      setIsBlackTurn((prev) => !prev);
    },
    [cells, isBlackTurn, count]
  );

  return (
    <div>
      <h1>{isBlackTurn ? 'Black Turn' : 'White Turn'}</h1>
      <h2>{`둘 수 있는 장소 : ${count}`}</h2>
      {cells.map((row: number[], y) => (
        <Row key={y}>
          {row.map((item: number, x) => (
            <Item onClick={() => onClickCell(x, y)} key={x}>
              {item === 0 ? canPut(x, y, isBlackTurn ? 1 : 2, false) && <CanPutDot /> : <Stone item={item} />}
            </Item>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default OthelloTable;
