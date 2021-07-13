import React, { useCallback, useState } from 'react'
import CustomDimensionsForm from './CustomDimensionsForm'

export default function NewGame ({ onBoardView, dimensions }) {
  const [showForm, setShowForm] = useState(false)
  const { setBoardDimensions } = dimensions

  const setDimensions = useCallback((width, height, mines, maxAdjacentMines) => {
    setBoardDimensions(width, height, mines, maxAdjacentMines)
    onBoardView()
  }, [setBoardDimensions, onBoardView])

  return (
    <>
      <h4>New Game</h4>
      <ul>
        <li><span className='menu-option' onClick={() => setDimensions(8, 8, 10)}>Beginner</span></li>
        <li><span className='menu-option' onClick={() => setDimensions(16, 16, 40)}>Intermediate</span></li>
        <li><span className='menu-option' onClick={() => setDimensions(16, 30, 99, 8)}>Expert</span></li>
        <li><span className='menu-option' onClick={() => setShowForm(show => !show)}>Custom</span></li>
      </ul>
      <CustomDimensionsForm
        boardDimensions={dimensions}
        showForm={showForm}
        submit={onBoardView}
      />
    </>
  )
}
