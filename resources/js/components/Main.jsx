import React from 'react'

export default function Main ({ setView }) {
  return (
    <>
      <h4>Main Menu</h4>
      <ul>
        <li><span className='menu-option' onClick={() => setView('new-game')}>New Game</span></li>
      </ul>
    </>
  )
}
