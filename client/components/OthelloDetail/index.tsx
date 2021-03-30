import { blackCountAtom, cellsAtom, countAtom, isBlackTurnAtom, isFinishedAtom, stackAtom, turnCountAtom, whiteCountAtom } from '@atoms/';
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
  const [turnCount, setTurnCount] = useAtom(turnCountAtom);
  const [isFinished] = useAtom(isFinishedAtom);
  const [stack, setStack] = useAtom(stackAtom);

  const onClickLeft = useCallback(() => {
    setTurnCount((c) => c - 1);
    setStack(
      produce((draft) => {
        draft.pop();
      })
    );
    setCells(
      produce((draft) => {
        for (let i = 0; i < draft.length; i++) {
          draft[i] = stack[stack.length - 1][i];
        }
      })
    );
  }, [cells, stack, turnCount]);

  const onClickRestart = useCallback(() => {
    console.log('clicked');
    setCells(
      produce((draft) => {
        for (let i = 0; i < draft.length; i++) {
          draft[i] = Array(8).fill(0);
        }
        [draft[3][3], draft[3][4]] = [1, 2];
        [draft[4][3], draft[4][4]] = [2, 1];
      })
    );
    setTurnCount(0);
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
      <h4>{`${turnCount + 1}번째 수입니다.`}</h4>
      {isFinished && <h5>겜끝ㅋ</h5>}
      <ButtonContainer>
        <Button onClick={onClickLeft} disabled={turnCount < 1}>
          <BiLeftArrow />
          무르기
        </Button>
        <Button onClick={onClickRestart}>다시 시작</Button>
      </ButtonContainer>
    </div>
  );
};

export default index;
