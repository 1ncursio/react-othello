import { atom } from 'jotai';

// const arr = Array(8).fill(Array(8).fill(0));
export const initialCells = Array.from({ length: 8 }, () => Array(8).fill(0));

[initialCells[3][3], initialCells[3][4]] = [1, 2];
[initialCells[4][3], initialCells[4][4]] = [2, 1];

export const cellsAtom = atom<number[][]>(initialCells);

export const countAtom = atom<number>(0);

export const blackCountAtom = atom<number>(0);

export const whiteCountAtom = atom<number>(0);

export const turnCountAtom = atom<number>(0);

export const isFinishedAtom = atom<boolean>(false);

export const isBlackTurnAtom = atom<boolean>(true);

export const stackAtom = atom<number[][][]>([]);

// export const stackIndexAtom = atom<number>(0);
