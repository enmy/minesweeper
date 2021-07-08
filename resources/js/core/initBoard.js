export default function initBoard (boardValues) {
  return boardValues.map(row => (
    row.map(cell => ({
      value: cell,
      state: 'covered'
    }))
  ))
}
