// Given a integer, return an integer that is the reverse
// ordering of numbers
// --- Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

const reverseInt = (number) => {
  const reversed = parseInt(number.toString().split('').reverse().join(''))
  // return number < 0 ? reversed * -1 : reversed
  return reversed * Math.sign(number)
}

module.exports = {
  reverseInt,
}
