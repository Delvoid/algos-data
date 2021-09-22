// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed.  Include spaces and punctuation in determining if the string is a palindrome

// palindrome('level') returns true
// palindrome('abcde') reutrns false
// palindrome('never odd or even') returns true

const palindrome = (str) => {
  return str === str.split('').reverse().join('')
}

const palindromeCompare = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

module.exports = {
  palindrome,
  palindromeCompare,
}
