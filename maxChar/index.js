//Given a string, return the character that is most commonly used in the string
//EXAMPLE
// maxChar('abcccccccccccd') === 'c'
// maxChar('apple 123111111') === '1'

const maxChar = (str) => {
  const chars = {}
  str.split('').forEach((char) => {
    chars[char] = chars[char] + 1 || 1
  })
  return Object.keys(chars).reduce((a, b) => (chars[a] > chars[b] ? a : b))
}

const maxChar2 = (str) => {
  const chars = {}
  let max = 0
  let maxChar = ''
  for (let char of str) {
    if (chars[char]) {
      chars[char]++
    } else {
      chars[char] = 1
    }
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = {
  maxChar,
  maxChar2,
}
