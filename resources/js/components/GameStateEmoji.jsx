import React from 'react'
import Emoji from './Emoji'

export default function GameStateEmoji ({ gameState }) {
  switch (gameState) {
    case 'won':
      return <Emoji code='smiling_face_with_sunglasses' />

    case false:
      return <Emoji code='neutral_face' />

    case 'lose':
      return <Emoji code='dizzy_face' />

    default:
      throw Error(`Game state '${gameState}' not implemented`)
  }
}
