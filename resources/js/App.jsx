import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Board from './components/Board'
import CustomDimensionsForm from './components/CustomDimensionsForm'
import useBoardDimensions from './hooks/useBoardDimensions'

export default function App () {
  const [showForm, setShowForm] = useState(false)
  const boardDimensions = useBoardDimensions()
  const { setBoardDimensions } = boardDimensions

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
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
      <div>
        <span className='level-selector' onClick={() => setBoardDimensions(8, 8, 10)}>Beginner</span>
        <span className='level-selector' onClick={() => setBoardDimensions(16, 16, 40)}>Intermediate</span>
        <span className='level-selector' onClick={() => setBoardDimensions(16, 30, 99)}>Expert</span>
        <span className='level-selector' onClick={() => setShowForm(show => !show)}>Custom</span>
      </div>
      <CustomDimensionsForm
        boardDimensions={boardDimensions}
        showForm={showForm}
      />
    </>
  )
}
