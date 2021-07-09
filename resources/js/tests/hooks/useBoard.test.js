import { expect, test } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'
import isMine from '../../core/isMine'
import useBoard from '../../hooks/useBoard'

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
