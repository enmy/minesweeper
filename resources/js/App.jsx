import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Board from './components/Board'
import Main from './components/Main'
import NewGame from './components/NewGame'
import useBoardDimensions from './hooks/useBoardDimensions'

export default function App () {
  const boardDimensions = useBoardDimensions()
  const [view, setView] = useState('main')

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
      {view === 'main' && (
        <Main setView={setView} />
      )}
      {view === 'new-game' && (
        <NewGame
          setView={setView}
          dimensions={boardDimensions}
        />
      )}
      {view === 'board' && (
        <>
          <span className='menu-option' onClick={() => setView('main')}> {'<'} Go Back</span>
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div style={{ marginTop: '4em', marginBottom: '4em' }}>
                <h3 style={{ color: 'red' }}>{error.message}</h3>
                <button onClick={resetErrorBoundary} className='py-4'>Try again</button>
              </div>
            )}
          >
            <Board boardDimensions={boardDimensions} />
          </ErrorBoundary>
        </>
      )}
    </>
  )
}
