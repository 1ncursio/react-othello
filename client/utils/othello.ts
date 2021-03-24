export const canPut = (x: number, y: number, cells: number[][], turn: number) => {
  if (cells[y][x] !== 0) return false;
  return checkRightCells(x, y, cells, turn) || checkLeftCells(x, y, cells, turn);
};

const checkLeftCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // x축 체크하면서 이어진 곳에 다른 돌이 있는가 체크// 만약 중간에 비었으면 return//
  // item = 원래 돌의 색 1 = 검정, 2 = 흰색
  // 바로 옆 돌이 자신의 돌이면 return false
  if (x === 0) {
    console.log('맨 왼쪽 끝임');
    return false;
  }

  if (turn === cells[y][x - 1]) {
    console.log('왼쪽 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = x - 1; i >= 0; i--) {
    if (cells[y][i] === 0) {
      console.log('왼쪽 돌이 비었음');
      return false;
    }
    if (cells[y][i] === turn) {
      console.log('왼쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
      return true;
    }
  }
  console.log('모든 조건 통과');
  return true;
};

const checkRightCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // x축 체크하면서 이어진 곳에 다른 돌이 있는가 체크// 만약 중간에 비었으면 return//
  // item = 원래 돌의 색 1 = 검정, 2 = 흰색
  // 바로 옆 돌이 자신의 돌이면 return false
  if (x === cells[y].length - 1) {
    console.log('맨 오른쪽 끝임');
    return false;
  }

  if (turn === cells[y][x + 1]) {
    console.log('오른쪽 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = x + 1; i < cells[y].length; i++) {
    if (cells[y][i] === 0) {
      console.log('오른쪽 돌이 비었음');
      return false;
    }
    if (cells[y][i] === turn) {
      console.log('오른쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
      return true;
    }
  }
  console.log('모든 조건 통과');
  return true;
};
