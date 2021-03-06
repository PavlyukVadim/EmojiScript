const InputStream = (input) => {
  let pos = 0
  let line = 1
  let col = 0

  const next = () => {
    const ch = input.charAt(pos++)
    if (ch === '\n') {
      line++
      col = 0
    } else {
      col++
    }
    return ch
  }

  const peek = () => input.charAt(pos)

  const eof = () => (peek() === '')

  const croak = (msg) => {
    throw new Error(msg + ' (' + line + ':' + col + ')')
  }

  return {
    next,
    peek,
    eof,
    croak
  }
}

module.exports = InputStream
