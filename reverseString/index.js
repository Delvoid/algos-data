const reverseBuiltInFunctions = (str) => {
  // split string
  const split = str.split('') //['a','p','p','l','e']
  //reverse array
  const reverse = split.reverse() //['e'.'l','p','p','a']
  //convert array back to string
  const newString = reverse.join('') //elppa
  // return new string
  return newString //elppa
}

const reverseBuiltInFunctionsCombined = (str) => {
  return str.split('').reverse().join('')
}

const reverseForLoop = (str) => {
  //declare variable
  let reversed = ''
  //loop through the string
  for (let char of str) {
    reversed = char + reversed
  }
  //return new string
  return reversed
}

const reverseReducer = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '')
}

// console.log(reverseBuiltInFunctions('apple'))
// console.log(reverseReducer('Learning To Code!'))
// console.log(reverseBuiltInFunctionsCombined('apple'))

module.exports = {
  reverseBuiltInFunctions,
  reverseBuiltInFunctionsCombined,
  reverseForLoop,
  reverseReducer,
}
