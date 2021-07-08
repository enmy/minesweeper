import { useCallback, useState } from 'react'

export default function useBoardDimensions ({ defaultWidth = 8, defaultHeight = 8, defaultMines = 10 } = {}) {
  const [width, setWidth] = useState(defaultWidth)
  const [height, setHeight] = useState(defaultHeight)
  const [mines, setMines] = useState(defaultMines)

  const setBoardDimensions = useCallback((width, height, mines) => {
    setWidth(width)
    setHeight(height)
    setMines(mines)
  }, [])

  return {
    width,
    height,
    mines,
    setBoardDimensions
  }
}
