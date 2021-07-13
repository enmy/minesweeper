import { useEffect, useState } from 'react'

export default function useSecondsHand (run, gameEnded, { defaultSeconds = 0 } = {}) {
  const [seconds, setSeconds] = useState(defaultSeconds)

  useEffect(() => {
    if (!run && !defaultSeconds) {
      return
    }

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [run])

  useEffect(() => {
    if (!gameEnded && !defaultSeconds) {
      setSeconds(0)
    }
  }, [gameEnded])

  return [seconds, setSeconds]
}
