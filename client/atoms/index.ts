import { atom } from 'jotai';

export const cellsAtom = atom(Array(8).fill(Array(8).fill(0)));
export const countAtom = atom(0);
