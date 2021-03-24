export const canPut = (x: number, y: number, cells: number[][], turn: number) => {
  if (cells[y][x] !== 0) return false;
  return (
    checkRightCells(x, y, cells, turn) ||
    checkLeftCells(x, y, cells, turn) ||
    checkUpCells(x, y, cells, turn) ||
    checkDownCells(x, y, cells, turn) ||
    checkRightDownCells(x, y, cells, turn)
    // checkLeftUpCells(x, y, cells, turn)
  );
};

const checkLeftCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
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

const checkUpCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // 바로 옆 돌이 자신의 돌이면 return false
  if (y === 0) {
    console.log('맨 위임');
    return false;
  }

  if (turn === cells[y - 1][x]) {
    console.log('위에 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = y - 1; i >= 0; i--) {
    if (cells[i][x] === 0) {
      console.log('밑쪽 돌이 비었음');
      return false;
    }
    if (cells[i][x] === turn) {
      console.log('밑쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
      return true;
    }
  }
  console.log('모든 조건 통과');
  return true;
};

const checkDownCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // 바로 옆 돌이 자신의 돌이면 return false
  console.log(y);
  if (y === cells[y].length - 1) {
    console.log('맨 밑임');
    return false;
  }

  if (turn === cells[y + 1][x]) {
    console.log('밑에 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = y + 1; i < cells.length; i++) {
    if (cells[i][x] === 0) {
      console.log('밑쪽 돌이 비었음');
      return false;
    }
    if (cells[i][x] === turn) {
      console.log('밑쪽 중간에 다른 돌이 있고 그 돌이 나랑같음');
      return true;
    }
  }
  console.log('모든 조건 통과');
  return true;
};

const checkRightDownCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // 바로 옆 돌이 자신의 돌이면 return false
  if (x === cells[y].length - 1 && y === cells.length - 1) {
    console.log('맨 오른쪽 밑임');
    return false;
  }

  console.log(y + 1, x + 1);
  if (turn === cells[y + 1][x + 1]) {
    console.log('오른쪽 밑에 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = y + 1; i < cells.length; i++) {
    for (let j = x + 1; j < cells[y].length; j++) {
      if (i - j === y - x) {
        console.log(cells[i][j]);
        if (cells[i][j] === 0) {
          console.log('오른쪽 밑에 돌이 비었음');
          return false;
        }
        if (cells[i][j] === turn) {
          console.log('오른쪽 밑 중간에 다른 돌이 있고 그 돌이 나랑같음');
          return true;
        }
      }
    }
  }
  console.log('모든 조건 통과');
  return true;
};

const checkLeftUpCells = (x: number, y: number, cells: number[][], turn: number): boolean => {
  // 바로 옆 돌이 자신의 돌이면 return false
  if (x === 0 && y === 0) {
    console.log('맨 왼쪽 위임');
    return false;
  }

  if (turn === cells[y - 1][x - 1]) {
    console.log('왼쪽 위에 돌이 나랑 같음');
    return false;
  }
  // for 문을 돌며 상대의 돌이 이어지는지 확인, 만약 비어있다면 return false
  for (let i = y - 1; i >= 0; i--) {
    for (let j = x - 1; j >= 0; j--) {
      if (i - j === y - x) {
        if (cells[i][j] === 0) {
          console.log('왼쪽 위에 돌이 비었음');
          return false;
        }
        if (cells[i][j] === turn) {
          console.log('왼쪽 위 중간에 다른 돌이 있고 그 돌이 나랑같음');
          return true;
        }
      }
    }
  }
  console.log('모든 조건 통과');
  return true;
};
