import { useEffect, useState } from 'react'

export default function useSecondsHand (run, gameEnded) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!run) {
      return
    }

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [run])

  useEffect(() => {
    if (!gameEnded) {
      setSeconds(0)
    }
  }, [gameEnded])

  return [seconds, setSeconds]
}
