import { expect, test, describe } from '@jest/globals'
import createBoard from '../createBoard'

test('it should create a board', () => {
  // TODO: investigate if one can seed the random
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
