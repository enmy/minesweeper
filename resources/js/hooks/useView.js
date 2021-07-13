import { useMemo, useState } from 'react'

const mainView = 'main'
const continueView = 'continue'
const newGameView = 'new-game'
const boardView = 'board'

export default function useView (board, dimensions) {
  const [view, setView] = useState(mainView)

  const defaultDimensions = useMemo(() => {
    if (view !== 'continue') {
      return dimensions
    }

    return {
      ...board.dimensions,
      setBoardDimensions: dimensions.setBoardDimensions
    }
  }, [view])

  const defaultBoard = useMemo(() => view === 'continue' ? board.board : null, [view])

  const defaultSeconds = useMemo(() => view === 'continue' ? board.seconds : 0, [view])

  const setMainView = useMemo(() => () => setView(mainView), [])
  const setContinueVew = useMemo(() => () => setView(continueView), [])
  const setNewGameView = useMemo(() => () => setView(newGameView), [])
  const setBoardView = useMemo(() => () => setView(boardView), [])

  return {
    view,
    defaultDimensions,
    defaultBoard,
    defaultSeconds,
    setMainView,
    setContinueVew,
    setNewGameView,
    setBoardView,
    mainView,
    continueView,
    newGameView,
    boardView
  }
}
