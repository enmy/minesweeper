import React, { useState } from 'react'
import createBoard from './createBoard'
import initBoard from './initBoard'
import visitAdjacent from './visitAdjacent'

export default function App () {
  const width = 10
  const height = 10
  const [board, setBoard] = useState(() => initBoard(createBoard(width, height, 16)))

  function uncover (x, y) {
    setBoard(board => {
      console.log({ cell: board[x][y], x, y })
      board[x][y].state = 'uncovered'
      if (board[x][y].value === 0) {
        visitAdjacent(x, y, width, height, (x, y) => {
          if (board[x][y].state !== 'uncovered') {
            uncover(x, y)
          }
        })
      }
      return [...board]
    })
  }

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
