import { useCallback, useEffect, useState } from 'react'
import { createBoard, destroyBoard, fetchBoardsBy, updateBoard } from '../core/api/boards'

export default function useStoredBoard (browserId) {
  const [stored, setStored] = useState(null)

  useEffect(() => {
    fetchBoardsBy({ browser_id: browserId })
      .then(response => setStored(response.data.data[0]))
      .catch(e => console.error(e))
  }, [])

  const saveBoard = useCallback((board, dimensions, seconds) => {
    let request
    if (stored && stored.id) {
      request = updateBoard({ id: stored.id, board, dimensions, seconds })
    } else {
      request = createBoard({ board, dimensions, seconds, browserId })
    }

    request.then(response => setStored(response.data.data))
      .catch(e => console.error(e))
  }, [stored, browserId])

  const deleteBoard = useCallback(() => {
    if (!stored || !stored.id) {
      return
    }

    destroyBoard(stored.id)
      .then(() => setStored(null))
      .catch(e => console.error(e))
  }, [stored])

  return {
    board: stored,
    saveBoard,
    deleteBoard
  }
}
