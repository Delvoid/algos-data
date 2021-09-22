const { palindrome } = require('./index')

describe('Palindrome', () => {
  test('Palindrome function exists', () => {
    expect(palindrome).toBeDefined()
  })
  it('returns true if the string is a palindrome', () => {
    const isPalindrome = palindrome('abba')
    expect(isPalindrome).toBe(true)
  })
  it('returns false if the string is a palindrome', () => {
    const isPalindrome = palindrome('Learning')
    expect(isPalindrome).toBe(false)
  })

  it.each`
    value                  | expectedValue
    ${'abba'}              | ${true}
    ${'Learning'}          | ${false}
    ${'Learning To Code!'} | ${false}
    ${'racecar'}           | ${true}
    ${'hi ih'}             | ${true}
  `(
    'returns $expectedValue when string is $value ',
    ({ value, expectedValue }) => {
      const isPalindrome = palindrome(value)
      expect(isPalindrome).toBe(expectedValue)
    }
  )
})
