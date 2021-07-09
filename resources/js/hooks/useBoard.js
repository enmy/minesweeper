import { useCallback, useEffect, useState } from 'react'
import createBoard from '../core/createBoard'
import initBoard from '../core/initBoard'
import isMine from '../core/isMine'
import visitAdjacent from '../core/visitAdjacent'

export default function useBoard (dimensions, defaultBoard = null) {
  const { width, height, mines, maxAdjacentMines } = dimensions
  const [board, setBoard] = useState(() => defaultBoard || initBoard(createBoard(width, height, mines)))
  const [gameEnded, setGameEnded] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [runTimer, setRunTimer] = useState(false)
  const [minesCounter, setMinesCounter] = useState(mines)

  useEffect(() => {
    if (!runTimer) {
      return
    }

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [runTimer])

  useEffect(() => {
    if (gameEnded) {
      setRunTimer(false)
      uncoverAllMines()
    } else {
      setSeconds(0)
      setMinesCounter(mines)
    }
  }, [gameEnded])

  useEffect(() => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (!isMine(board[i][j].value) && board[i][j].state !== 'uncovered') {
          return
        }
      }
    }
    setGameEnded('won')
  }, [board])

  useEffect(() => {
    restart()
  }, [width, height, mines])

  useEffect(() => {
    setMinesCounter(mines)
  }, [mines])

  const uncover = useCallback((x, y) => {
    if (gameEnded) {
      return
    }

    setRunTimer(true)

    setBoard(board => {
      uncoverRecursively(board, x, y)
      return [...board]
    })
  }, [gameEnded, width, height])

  const restart = useCallback(() => {
    setBoard(initBoard(createBoard(width, height, mines, maxAdjacentMines)))
    setGameEnded(false)
  }, [width, height, mines, maxAdjacentMines])

  const toogleFlag = useCallback((xTarget, yTarget) => {
    if (gameEnded) {
      return
    }

    setBoard(board => {
      const cell = board[xTarget][yTarget]
      if (cell.state === 'flagged') {
        cell.state = 'question-mark'
        setMinesCounter(mines => mines + 1)
      } else if (cell.state === 'covered') {
        cell.state = 'flagged'
        setMinesCounter(mines => mines - 1)
      } else if (cell.state === 'question-mark') {
        cell.state = 'covered'
      }
      return [...board]
    })
  }, [gameEnded])

  function uncoverRecursively (board, xTarget, yTarget) {
    const cell = board[xTarget][yTarget]
    if (isMine(cell.value)) {
      cell.state = 'exploted'
      setGameEnded('lose')
    } else {
      uncoverCell(board, xTarget, yTarget)
    }

    if (cell.value === 0 && cell.state !== 'flagged') {
      visitAdjacent(xTarget, yTarget, width, height, (x, y) => {
        if (board[x][y].state !== 'uncovered') {
          uncoverRecursively(board, x, y)
        }
      })
    }
  }

  function uncoverAllMines () {
    setBoard(board => {
      board.forEach((row, rowIndex) => (
        row.forEach((cell, columnIndex) => {
          if (isMine(cell.value) || cell.state === 'flagged') {
            uncoverCell(board, rowIndex, columnIndex)
          }
        })
      ))
      return [...board]
    })
  }

  function uncoverCell (board, xTarget, yTarget) {
    const cell = board[xTarget][yTarget]
    if (['covered', 'question-mark'].includes(cell.state)) {
      cell.state = 'uncovered'
    } else if (cell.state === 'flagged' && !isMine(cell.value) && gameEnded) {
      cell.state = 'wrong-flagged'
    }
  }

  return {
    board,
    uncover,
    restart,
    toogleFlag,
    seconds,
    minesCounter,
    gameEnded
  }
}
