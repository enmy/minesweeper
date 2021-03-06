import React, { useCallback, useEffect } from 'react'
import useBoard from '../hooks/useBoard'
import CellEmoji from './CellEmoji'
import GameStateEmoji from './GameStateEmoji'

export default function Board ({ boardDimensions, defaultBoard, saveBoard, deleteBoard, onGoBack, defaultSeconds = 0 }) {
  const { board, uncover, restart, toogleFlag, seconds, minesCounter, gameEnded } = useBoard(boardDimensions, { defaultBoard, defaultSeconds })

  useEffect(() => {
    if (gameEnded) {
      deleteBoard()
    }
  }, [gameEnded, deleteBoard])

  const handleToogleFlag = useCallback((e, rowIndex, columnIndex) => {
    e.preventDefault()
    toogleFlag(rowIndex, columnIndex)
  }, [toogleFlag])

  const handleGoBack = useCallback(() => {
    onGoBack()
    if (!gameEnded) {
      saveBoard(board, boardDimensions, seconds)
    }
  }, [board, boardDimensions, seconds, onGoBack, gameEnded])

  return (
    <>
      <span className='menu-option' onClick={handleGoBack}> {'<'} Go Back & Save</span>
      <table className='board'>
        <tbody>
          <tr>
            <td className='header' colSpan={board[0].length}>
              <div className='counter' style={{ float: 'left' }}>{minesCounter}</div>
              <div className='counter' style={{ float: 'right' }}>{seconds > 999 ? 999 : seconds}</div>
              <div className='restarter' onClick={restart}>
                <GameStateEmoji gameState={gameEnded} />
              </div>
            </td>
          </tr>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={`${rowIndex},${columnIndex}`}
                  className={`cell ${cell.state} cell-${cell.value}`}
                  onClick={() => uncover(rowIndex, columnIndex)}
                  onContextMenu={e => handleToogleFlag(e, rowIndex, columnIndex)}
                >
                  <CellEmoji cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
