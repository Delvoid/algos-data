const { maxChar } = require('./index')

describe('return the character that is most commonly used in the string', () => {
  test('maxChar function exists', () => {
    expect(maxChar).toBeDefined()
  })

  test('Finds the most frequently used char', () => {
    expect(maxChar('a')).toEqual('a')
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a')
  })

  test('Works with numbers in the string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1')
  })
})