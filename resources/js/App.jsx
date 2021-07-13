import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Board from './components/Board'
import Main from './components/Main'
import NewGame from './components/NewGame'
import browserId from './core/broserId'
import useBoardDimensions from './hooks/useBoardDimensions'
import useStoredBoard from './hooks/useStoredBoard'
import useView from './hooks/useView'

export default function App () {
  const boardDimensions = useBoardDimensions()
  const { board, saveBoard, deleteBoard } = useStoredBoard(browserId())
  const view = useView(board, boardDimensions)
  const { setContinueVew, setNewGameView, setBoardView, setMainView } = view

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
      {view.view === view.mainView && (
        <Main
          onContinue={setContinueVew}
          onNewGame={setNewGameView}
          canContinue={board}
        />
      )}
      {view.view === view.newGameView && (
        <NewGame
          onBoardView={setBoardView}
          dimensions={boardDimensions}
        />
      )}
      {[view.boardView, view.continueView].includes(view.view) && (
        <>
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <>
                <span className='menu-option' onClick={setMainView}> {'<'} Go Back</span>
                <div style={{ marginTop: '4em', marginBottom: '4em' }}>
                  <h3 style={{ color: 'red' }}>{error.message}</h3>
                  <button onClick={resetErrorBoundary} className='py-4'>Try again</button>
                </div>
              </>
            )}
          >
            <Board
              boardDimensions={view.defaultDimensions}
              defaultBoard={view.defaultBoard}
              saveBoard={saveBoard}
              deleteBoard={deleteBoard}
              defaultSeconds={view.defaultSeconds}
              onGoBack={setMainView}
            />
          </ErrorBoundary>
        </>
      )}
    </>
  )
}
