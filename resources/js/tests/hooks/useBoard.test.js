import { expect, jest, test } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'
import isMine from '../../core/isMine'
import useBoard from '../../hooks/useBoard'
import useBoardDimensions from '../../hooks/useBoardDimensions'

test('it should uncover cell', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 0
  }
  const { result } = renderHook(() => useBoard(dimensions))

  act(() => {
    result.current.uncover(0, 0)
  })

  expect(result.current.board[0][0].state).toBe('uncovered')
})

test('it should not uncover when is flagged', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 0
  }
  const { result } = renderHook(() => useBoard(dimensions))

  act(() => {
    result.current.toogleFlag(0, 0)
    result.current.uncover(0, 0)
  })

  expect(result.current.board[0][0].state).toBe('flagged')
  // the adjacents should be covered
  expect(result.current.board[0][1].state).toBe('covered')
  expect(result.current.board[1][0].state).toBe('covered')
})

test('it should be wrong-flagged when the game ends', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 1
  }
  const { result } = renderHook(() => useBoard(dimensions))

  const nonMineCell = nonMineCellCoordinates(result.current.board)
  const mineCell = mineCellCoordinates(result.current.board)

  act(() => {
    result.current.toogleFlag(nonMineCell.x, nonMineCell.y)
    result.current.uncover(mineCell.x, mineCell.y)
  })

  expect(result.current.board[nonMineCell.x][nonMineCell.y].state).toBe('wrong-flagged')
})

test('it should uncover all cells', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 0
  }
  const { result } = renderHook(() => useBoard(dimensions))

  act(() => {
    result.current.uncover(0, 0)
  })

  result.current.board.forEach(row => (
    row.forEach(cell => {
      expect(cell.state).toBe('uncovered')
    })
  ))
})

test('it should not flag when game ended', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 1
  }
  const { result } = renderHook(() => useBoard(dimensions))

  const mineCell = mineCellCoordinates(result.current.board)
  const nonMineCell = nonMineCellCoordinates(result.current.board)

  act(() => {
    result.current.uncover(mineCell.x, mineCell.y)
  })

  act(() => {
    result.current.toogleFlag(nonMineCell.x, nonMineCell.y)
  })

  expect(result.current.board[nonMineCell.x][nonMineCell.y].state).toBe('covered')
  expect(result.current.gameEnded).toBe('lose')
})

test('it should restart seconds when dimensions change', () => {
  jest.useFakeTimers()

  const defaultDimensions = {
    defaultWidth: 6,
    defaultHeight: 6,
    defaultMines: 6
  }

  const { result } = renderHook(() => {
    const dimensions = useBoardDimensions(defaultDimensions)
    const board = useBoard(dimensions)
    return { dimensions, board }
  })

  const numberCell = numberCellCoordinates(result.current.board.board)

  act(() => {
    result.current.board.uncover(numberCell.x, numberCell.y)
  })

  expect(result.current.board.gameEnded).toBe(false)
  expect(result.current.board.seconds).toBe(0)

  act(() => {
    jest.runOnlyPendingTimers()
  })

  expect(result.current.board.seconds).toBe(1)

  act(() => {
    result.current.dimensions.setBoardDimensions(7, 7, 2)
  })

  expect(result.current.board.seconds).toBe(0)
})

test('it should not explode a flagged cell', () => {
  const dimensions = {
    width: 6,
    height: 6,
    mines: 5
  }
  const { result } = renderHook(() => useBoard(dimensions))

  const mineCell = mineCellCoordinates(result.current.board)

  act(() => {
    result.current.toogleFlag(mineCell.x, mineCell.y)
  })

  expect(result.current.board[mineCell.x][mineCell.y].state).toBe('flagged')

  act(() => {
    result.current.uncover(mineCell.x, mineCell.y)
  })

  expect(result.current.board[mineCell.x][mineCell.y].state).toBe('flagged')
  expect(result.current.gameEnded).toBe(false)
})

function nonMineCellCoordinates (board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (!isMine(board[x][y].value)) {
        return {
          x,
          y
        }
      }
    }
  }
}

function mineCellCoordinates (board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (isMine(board[x][y].value)) {
        return {
          x,
          y
        }
      }
    }
  }
}

function numberCellCoordinates (board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if ([1, 2, 3, 4, 5, 6, 7, 8].includes(board[x][y].value)) {
        return {
          x,
          y
        }
      }
    }
  }
}
