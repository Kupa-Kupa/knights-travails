function generateChessBoard() {
  console.log('start generateChessBoard');

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

          possibleMoves.push(validMove);
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
}

generateChessBoard();

function knightMoves(start, end) {}
