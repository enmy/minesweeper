import { useCallback, useState } from 'react'
import createBoard from './createBoard'
import initBoard from './initBoard'
import isMine from './isMine'
import visitAdjacent from './visitAdjacent'

export default function useBoard () {
  const width = 10
  const height = 10
  const mines = 16
  const [board, setBoard] = useState(() => initBoard(createBoard(width, height, mines)))
  const [gameEnded, setGameEnded] = useState(false)

  const uncover = useCallback((x, y) => {
    if (gameEnded) {
      return
    }

    setBoard(board => {
      uncoverRecursively(board, x, y)
      return [...board]
    })
  }, [gameEnded])

  const restart = useCallback(() => {
    setBoard(initBoard(createBoard(width, height, mines)))
    setGameEnded(false)
  }, [])

  function uncoverRecursively (board, xTarget, yTarget) {
    uncoverCell(board, xTarget, yTarget)

    const cell = board[xTarget][yTarget]
    if (isMine(cell.value)) {
      cell.state = 'exploted'
      uncoverAllMines(board)
      setGameEnded(true)
    }

    if (cell.value === 0) {
      visitAdjacent(xTarget, yTarget, width, height, (x, y) => {
        if (board[x][y].state !== 'uncovered') {
          uncoverRecursively(board, x, y)
        }
      })
    }
  }

  function uncoverAllMines (board) {
    board.forEach((row, rowIndex) => (
      row.forEach((cell, columnIndex) => {
        if (isMine(cell.value)) {
          uncoverCell(board, rowIndex, columnIndex)
        }
      })
    ))
  }

  function uncoverCell (board, xTarget, yTarget) {
    const cell = board[xTarget][yTarget]
    // TODO: add state for flagged errors or asertions
    if (cell.state === 'covered') {
      cell.state = 'uncovered'
    }
  }

  return {
    board,
    uncover,
    restart
  }
}
