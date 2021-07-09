import { expect, test } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'
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
