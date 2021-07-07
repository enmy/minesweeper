export default function visitAdjacent (x, y, width, height, fn) {
  if (x - 1 >= 0) {
    fn(x - 1, y)
  }
  if (y - 1 >= 0) {
    fn(x, y - 1)
  }
  if (x - 1 >= 0 && y - 1 >= 0) {
    fn(x - 1, y - 1)
  }
  if (x + 1 < width) {
    fn(x + 1, y)
  }
  if (y + 1 < height) {
    fn(x, y + 1)
  }
  if (x + 1 < width && y + 1 < height) {
    fn(x + 1, y + 1)
  }
  if (x - 1 >= 0 && y + 1 < height) {
    fn(x - 1, y + 1)
  }
  if (x + 1 < width && y - 1 >= 0) {
    fn(x + 1, y - 1)
  }
}
