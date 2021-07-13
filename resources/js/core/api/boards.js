import { Serializer } from 'jsonapi-serializer'
import { create, destroy, fetch, update } from './api'

export async function createBoard ({ board, browserId, seconds, dimensions }) {
  board = JSON.stringify(board)
  dimensions = JSON.stringify(dimensions)
  const body = serialize({ board, browser_id: browserId, seconds, dimensions })

  const response = await create({
    url: 'v1/boards',
    body
  })

  if (response.data && response.data.data) {
    response.data.data = parseBoard(response.data.data)
  }

  return response
}

export async function updateBoard ({ id, board, seconds, dimensions, browserId = undefined }) {
  board = JSON.stringify(board)
  dimensions = JSON.stringify(dimensions)
  const body = serialize({ id, board, dimensions, seconds, browser_id: browserId })

  const response = await update({
    url: `v1/boards/${id}`,
    body
  })

  if (response.data && response.data.data) {
    response.data.data = parseBoard(response.data.data)
  }

  return response
}

export async function findBoard (id) {
  const response = await fetch({
    url: `v1/boards/${id}`
  })

  if (response.data && response.data.data) {
    response.data.data = parseBoard(response.data.data)
  }

  return response
}

export async function fetchBoardsBy (filter) {
  const params = { filter }

  const response = await fetch({
    url: 'v1/boards',
    params
  })

  if (response.data && response.data.data) {
    response.data.data = response.data.data.map(board => parseBoard(board))
  }

  return response
}

export async function destroyBoard (id) {
  return destroy({
    url: `v1/boards/${id}`
  })
}

function serialize (data) {
  const opt = {
    keyForAttribute: 'snake_case',
    attributes: ['board', 'browser_id', 'seconds', 'dimensions']
  }

  return new Serializer('boards', opt).serialize(data)
}

function parseBoard (board) {
  board.board = JSON.parse(board.board)
  board.dimensions = JSON.parse(board.dimensions)
  return board
}
