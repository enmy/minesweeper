import { useCallback, useState } from 'react'

export default function useBoardDimensions ({
  defaultWidth = 8,
  defaultHeight = 8,
  defaultMines = 10,
  defaultMaxAdjacentMines = 6
} = {}) {
  const [width, setWidth] = useState(defaultWidth)
  const [height, setHeight] = useState(defaultHeight)
  const [mines, setMines] = useState(defaultMines)
  const [maxAdjacentMines, setMaxAdjacentMines] = useState(defaultMaxAdjacentMines)

  const setBoardDimensions = useCallback((width, height, mines, maxAdjacentMines = 6) => {
    setWidth(width)
    setHeight(height)
    setMines(mines)
    setMaxAdjacentMines(maxAdjacentMines)
  }, [])

  return {
    width,
    height,
    mines,
    maxAdjacentMines,
    setBoardDimensions
  }
}
