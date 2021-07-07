import React from 'react'
import isMine from './isMine'
import useBoard from './useBoard'

export default function App () {
  const { board, uncover } = useBoard()

  return (
    <>
      <h1>Minesweeper</h1>
      <h3><i>by: Enmy Perez</i></h3>
      <table className='board'>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={`${rowIndex},${columnIndex}`}
                  className={`cell ${cell.state}`}
                  onClick={() => uncover(rowIndex, columnIndex)}
                >
                  {cell.state === 'covered'
                    ? ' '
                    : (isMine(cell.value)
                        ? (cell.state === 'exploted'
                            ? String.fromCodePoint(0x1F4A5)
                            : String.fromCodePoint(0x1F4A3)
                          )
                        : (cell.value || ' ')
                      )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
