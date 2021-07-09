export default function Emoji ({ code }) {
  return emojiFromCodePoint(code)
}

function emojiFromCodePoint (code) {
  switch (code) {
    case 'question':
      return String.fromCodePoint(0x2753)

    case 'bomb':
      return String.fromCodePoint(0x1F4A3)

    case 'boom':
      return String.fromCodePoint(0x1F4A5)

    case 'triangular_flag':
      return String.fromCodePoint(0x1F6A9)

    case 'smiling_face_with_sunglasses':
      return String.fromCodePoint(0x1F60E)

    case 'dizzy_face':
      return String.fromCodePoint(0x1F635)

    case 'neutral_face':
      return String.fromCodePoint(0x1F610)

    case 'cross_mark':
      return String.fromCodePoint(0x274C)

    default:
      throw Error(`Emoji ${code} not implemented`)
  }
}
