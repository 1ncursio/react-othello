import { blackCountAtom, cellsAtom, countAtom, initialCells, isBlackTurnAtom, isFinishedAtom, turnCountAtom, whiteCountAtom } from '@atoms/';
import produce from 'immer';
import { useAtom } from 'jotai';
import React, { useCallback } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Button, ButtonContainer, Score } from './styles';

const index = () => {
  const [cells, setCells] = useAtom(cellsAtom);
  const [blackCount] = useAtom(blackCountAtom);
  const [whiteCount] = useAtom(whiteCountAtom);
  const [count] = useAtom(countAtom);
  const [isBlackTurn] = useAtom(isBlackTurnAtom);
  const [turnCount] = useAtom(turnCountAtom);
  const [isFinished] = useAtom(isFinishedAtom);

  const onClickRestart = useCallback(() => {
    console.log('clicked');
    // setCells();
  }, [cells]);

  return (
    <div style={{ width: 250 }}>
      <Score>
        <span>{`검은 돌 : ${blackCount}`}</span>
        <span>{`흰 돌 : ${whiteCount}`}</span>
      </Score>
      <h1>{isBlackTurn ? '검은 돌' : '흰 돌'} 차례입니다.</h1>
      <h2>{`둘 수 있는 장소 : ${count}`}</h2>
      <h4>{`${turnCount}번째 수입니다.`}</h4>
      {isFinished && <h5>겜끝ㅋ</h5>}
      {!isFinished && <button onClick={onClickRestart}>다시 시작</button>}
      <ButtonContainer>
        <Button>
          <BiLeftArrow />
        </Button>
        <Button>
          <BiRightArrow />
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default index;
