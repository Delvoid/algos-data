const { vowels } = require('./index')

describe('Vowels', () => {
  test('vowels is a function', () => {
    expect(typeof vowels).toEqual('function')
  })

  it.each`
    value                           | expectedValue
    ${'aeiou'}                      | ${5}
    ${'abcdefghijklmnopqrstuvwxyz'} | ${5}
    ${'abcde'}                      | ${2}
  `('returns $expectedValue when given $value', ({ value, expectedValue }) => {
    const count = vowels(value)
    expect(count).toBe(expectedValue)
  })
})
