export function p() {
  let string = ''
  if (arguments.length === 1) {
    string = `${arguments[0]}px`
  } else if (arguments.length === 2) {
    string = `${arguments[0]}px ${arguments[1]}px`
  } else if (arguments.length === 4) {
    string = `${arguments[0]}px ${arguments[1]}px ${arguments[2]}px ${
      arguments[3]
    }px`
  }
  return string
}
