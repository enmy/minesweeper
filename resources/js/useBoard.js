import { useCallback, useEffect, useState } from 'react'
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
    setGameEnded(true)
  }, [board])

  const uncover = useCallback((x, y) => {
    if (gameEnded) {
      return
    }

    setRunTimer(true)

    setBoard(board => {
      uncoverRecursively(board, x, y)
      return [...board]
    })
  }, [gameEnded])

  const restart = useCallback(() => {
    setBoard(initBoard(createBoard(width, height, mines)))
    setGameEnded(false)
  }, [])

  const toogleFlag = useCallback((e, xTarget, yTarget) => {
    e.preventDefault()

    if (gameEnded) {
      return
    }

    setBoard(board => {
      const cell = board[xTarget][yTarget]
      if (cell.state === 'flagged') {
        cell.state = 'covered'
        setMinesCounter(mines => mines + 1)
      } else if (cell.state === 'covered') {
        cell.state = 'flagged'
        setMinesCounter(mines => mines - 1)
      }
      return [...board]
    })
  }, [])

  function uncoverRecursively (board, xTarget, yTarget) {
    uncoverCell(board, xTarget, yTarget)

    const cell = board[xTarget][yTarget]
    if (isMine(cell.value)) {
      cell.state = 'exploted'
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

  function uncoverAllMines () {
    setBoard(board => {
      board.forEach((row, rowIndex) => (
        row.forEach((cell, columnIndex) => {
          if (isMine(cell.value)) {
            uncoverCell(board, rowIndex, columnIndex)
          }
        })
      ))
      return [...board]
    })
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
    restart,
    toogleFlag,
    seconds,
    minesCounter
  }
}
