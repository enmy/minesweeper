import { useCallback, useState } from 'react'
import createBoard from './createBoard'
import initBoard from './initBoard'
import visitAdjacent from './visitAdjacent'

export default function useBoard () {
  const width = 10
  const height = 10
  const mines = 16
  const [board, setBoard] = useState(() => initBoard(createBoard(width, height, mines)))

  const uncover = useCallback((x, y) => {
    setBoard(board => {
      uncoverRecursively(board, x, y)
      return [...board]
    })
  }, [])

  function uncoverRecursively (board, xTarge, yTarget) {
    const cell = board[xTarge][yTarget]
    if (cell.state !== 'flagged') {
      cell.state = 'uncovered'
    }

    if (cell.value === 0) {
      visitAdjacent(xTarge, yTarget, width, height, (x, y) => {
        if (board[x][y].state !== 'uncovered') {
          uncoverRecursively(board, x, y)
        }
      })
    }
  }

  return {
    board,
    uncover
  }
}
