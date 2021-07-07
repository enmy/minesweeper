import visitAdjacent from './visitAdjacent'

export default function createBoard (width, height, mines) {
  validateBoard(width, height, mines)

  let tooManyTries = 0
  while (tooManyTries++ < 1000) {
    try {
      return doCreateBoard(width, height, mines)
    } catch (error) {
      if (!(error instanceof CellWithTooManyAdjacentException)) {
        throw error
      }
    }
  }

  throw new Error('Giving up trying to create the board, there are too many mines.')
}

function doCreateBoard (width, height, mines) {
  let placedMines = 0
  const board = createEmptyBoard(width, height)

  while (placedMines < mines) {
    const xTarget = Math.floor(Math.random() * width)
    const yTarget = Math.floor(Math.random() * height)

    if (!isMine(board[xTarget][yTarget])) {
      board[xTarget][yTarget] = mineValue()
      placedMines++

      visitAdjacent(xTarget, yTarget, width, height, (x, y) => {
        if (!isMine(board[x][y])) {
          board[x][y]++
          if (board[x][y] > 6) {
            throw new CellWithTooManyAdjacentException()
          }
        }
      })
    }
  }
  return board
}

function validateBoard (width, height, mines) {
  if (width < 6 || height < 6) {
    throw new Error('The side should be bigger than 5')
  }
  if (width * height > 512) {
    throw new Error('The board is too big. It should be less than 512 cells')
  }
  if (width * height * 0.25 < mines) {
    throw new Error('There are too many mines for this board.')
  }
  if (width * 0.25 > height || height * 0.25 > width) {
    throw new Error('One side is too small compared to the other.')
  }
}

function createEmptyBoard (width, height) {
  const board = new Array(width)
  for (let x = 0; x < width; x++) {
    board[x] = new Array(height)
    for (let y = 0; y < height; y++) {
      board[x][y] = 0
    }
  }
  return board
}

function isMine (value) {
  return value === mineValue()
}

function mineValue () {
  return -1
}

function CellWithTooManyAdjacentException () {}
