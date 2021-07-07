import mineValue from './mineValue'

export default function isMine (value) {
  return value === mineValue()
}
