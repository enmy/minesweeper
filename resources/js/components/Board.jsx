import React from 'react'
import isMine from '../core/isMine'
import useBoard from '../hooks/useBoard'
import Emoji from './Emoji'

export default function Board ({ boardDimensions }) {
  const { board, uncover, restart, toogleFlag, seconds, minesCounter, gameEnded } = useBoard(boardDimensions)

  return (
    <table className='board'>
      <tbody>
        <tr>
          <td className='header' colSpan={board[0].length}>
            <div className='counter' style={{ float: 'left' }}>{minesCounter}</div>
            <div className='counter' style={{ float: 'right' }}>{seconds > 999 ? 999 : seconds}</div>
            <div className='restarter' onClick={restart}>
              {gameEnded
                ? (gameEnded === 'won'
                    ? <Emoji code='smiling_face_with_sunglasses' />
                    : <Emoji code='dizzy_face' />
                  )
                : <Emoji code='neutral_face' />}
            </div>
          </td>
        </tr>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td
                key={`${rowIndex},${columnIndex}`}
                className={`cell ${cell.state}`}
                onClick={() => uncover(rowIndex, columnIndex)}
                onContextMenu={e => toogleFlag(e, rowIndex, columnIndex)}
              >
                {cell.state === 'covered'
                  ? ' '
                  : (cell.state === 'flagged'
                      ? <Emoji code='triangular_flag' />
                      : (cell.state === 'question-mark'
                          ? <Emoji code='question' />
                          : (isMine(cell.value)
                              ? (cell.state === 'exploted'
                                  ? <Emoji code='boom' />
                                  : <Emoji code='bomb' />
                                )
                              : (cell.value || ' ')
                            )))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
