import React from 'react'
import isMine from './isMine'
import useBoard from './useBoard'

export default function App () {
  const { board, uncover, restart, toogleFlag, seconds, minesCounter, gameEnded } = useBoard()

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
      <table className='board'>
        <tbody>
          <tr>
            <td className='header' colSpan={board[0].length}>
              <div className='counter' style={{ float: 'left' }}>{minesCounter}</div>
              <div className='counter' style={{ float: 'right' }}>{seconds > 999 ? 999 : seconds}</div>
              <div className='restarter' onClick={restart}>{gameEnded ? (gameEnded === 'won' ? String.fromCodePoint(0x1F60E) : String.fromCodePoint(0x1F635)) : String.fromCodePoint(0x1F610)}</div>
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
                        ? String.fromCodePoint(0x1F6A9)
                        : (isMine(cell.value)
                            ? (cell.state === 'exploted'
                                ? String.fromCodePoint(0x1F4A5)
                                : String.fromCodePoint(0x1F4A3)
                              )
                            : (cell.value || ' ')
                          ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
