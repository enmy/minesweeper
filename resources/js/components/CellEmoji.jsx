import React from 'react'
import isMine from '../core/isMine'
import Emoji from './Emoji'

export default function CellEmoji ({ cell }) {
  switch (cell.state) {
    case 'covered':
      return ' '

    case 'flagged':
      return <Emoji code='triangular_flag' />

    case 'question-mark':
      return <Emoji code='question' />

    case 'exploted':
      return <Emoji code='boom' />

    case 'uncovered':
      return isMine(cell.value) ? <Emoji code='bomb' /> : (cell.value || ' ')

    default:
      throw Error(`Cell state '${cell.state}' not implemented`)
  }
}
