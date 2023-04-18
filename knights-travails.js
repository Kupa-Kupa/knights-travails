function generateChessBoard() {
  //   console.log('start generateChessBoard');

  // create map for chessboard
  const chessBoard = new Map();

  // declare possible move directions of the knight
  const moveDirections = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  // set squares of board with an an array that holds all valid possible moves from that square
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // declare array of possible moves
      const possibleMoves = [];

      // loop through moveDirections, set new X and Y and add valid moves to possible moves array
      for (const [xOffset, yOffset] of moveDirections) {
        // console.log('xOffset:', xOffset);
        // console.log('yOffset:', yOffset);

        // set new X and Y position after move a given moveDirection
        const [newX, newY] = [i + xOffset, j + yOffset];

        // console.log('newX:', newX);
        // console.log('newY:', newY);

        // valid moves are only moves within the chessboard 8x8 square
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
          const validMove = [newX, newY];

          //   console.log('validMoves:', validMove);

          // need to be a string to work... TBD explanation of why (need string for comparison later)
          possibleMoves.push(String(validMove));
        }
      }

      // console.log('possibleMoves:', possibleMoves);

      // key must be a string, set the value to the array of possible moves
      chessBoard.set(`${[i, j]}`, possibleMoves);
    }
  }

  //   for (const keyVal of chessBoard) {
  //     console.log(keyVal);
  //   }

  return chessBoard;
}

function knightMoves(start, end) {
  const chessBoard = generateChessBoard();

  const origin = String(start);
  console.log('origin', origin);
  const destination = String(end);
  console.log('destination', destination);

  // paths only required if i want to see all of them
  //   const paths = [];
  const visited = new Set();
  const queue = [];

  queue.push([origin, [origin]]);

  while (queue.length !== 0) {
    let [current, path] = queue.shift();
    // console.log('current', current);
    visited.add(current);

    if (current === destination) {
      // path should be added to array of possible paths if i want to see them all not just one
      //   paths.push(path);
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((square) => console.log(`[${square}]`));
      return;
    }

    const possibleMoves = chessBoard.get(current);
    // console.log(possibleMoves);

    for (const move of possibleMoves) {
      //   console.log('move', move);
      if (!visited.has(move)) {
        queue.push([move, [...path, move]]);
      }
    }
  }

  // not require since i only care about the shorted path:
  //   console.log(`Fastest Routes from ${start} to ${end}`);
  //   paths.forEach((element) => console.log(element));
}

knightMoves([0, 0], [0, 1]);
