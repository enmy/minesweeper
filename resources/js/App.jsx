import React from 'react'
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
                    : (cell.value || ' ')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
