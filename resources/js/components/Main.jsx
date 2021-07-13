import React from 'react'

export default function Main ({ onContinue, onNewGame, canContinue }) {
  return (
    <>
      <h4>Main Menu</h4>
      <ul>
        {canContinue && (
          <li><span className='menu-option' onClick={onContinue}>Continue Game</span></li>
        )}
        <li><span className='menu-option' onClick={onNewGame}>New Game</span></li>
      </ul>
    </>
  )
}
