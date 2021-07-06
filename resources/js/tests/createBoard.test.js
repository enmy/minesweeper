import { expect, test, describe } from '@jest/globals'
import createBoard from '../createBoard'

test('it should create a board', () => {
  expect(() => createBoard(8, 8, 10)).not.toThrow(Error)
})

describe('it should throw when', () => {
  test('sides are too small', () => {
    expect(() => createBoard(5, 6, 10)).toThrow(Error)
    expect(() => createBoard(6, 5, 10)).toThrow(Error)
    expect(() => createBoard(5, 5, 10)).toThrow(Error)
  })

  test('too many cells', () => {
    expect(() => createBoard(25, 25, 10)).toThrow(Error)
    expect(() => createBoard(50, 50, 10)).toThrow(Error)
  })

  test('too many mines', () => {
    expect(() => createBoard(8, 8, 20)).toThrow(Error)
    expect(() => createBoard(10, 10, 30)).toThrow(Error)
  })

  test('one side is too small compared to the other', () => {
    expect(() => createBoard(20, 5, 10)).toThrow(Error)
    expect(() => createBoard(5, 20, 10)).toThrow(Error)
  })
})

test('it should not have more than 6 adjacent mines', () => {
  // TODO: investigate other aproach to this test because it's random
  const board = createBoard(8, 8, 16)
  expect(board[0]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[1]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[2]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[3]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[4]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[5]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[6]).not.toEqual(expect.arrayContaining([7, 8]))
  expect(board[7]).not.toEqual(expect.arrayContaining([7, 8]))
})
