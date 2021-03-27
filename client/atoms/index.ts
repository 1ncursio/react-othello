import { atom } from 'jotai';

export const cellsAtom = atom<number[][]>(Array(8).fill(Array(8).fill(0)));

export const countAtom = atom<number>(0);

export const blackCountAtom = atom<number>(0);

export const whiteCountAtom = atom<number>(0);
