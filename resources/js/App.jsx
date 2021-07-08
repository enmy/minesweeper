import React from 'react'
import Board from './Board'
import useBoardDimensions from './useBoardDimensions'

export default function App () {
  const boardDimensions = useBoardDimensions()
  const { setBoardDimensions, ...dimensions } = boardDimensions

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
      <Board boardDimensions={boardDimensions} />
      <div>
        <a href='javascript:void(0)' className='level-selector' onClick={() => setBoardDimensions(8, 8, 10)}>Beginner</a>
        <a href='javascript:void(0)' className='level-selector' onClick={() => setBoardDimensions(16, 16, 40)}>Intermediate</a>
        <a href='javascript:void(0)' className='level-selector' onClick={() => setBoardDimensions(16, 30, 99)}>Expert</a>
      </div>
    </>
  )
}
