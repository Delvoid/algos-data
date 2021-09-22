const { reverseInt } = require('./index')

describe('returns a given string in reverse', () => {
  test('Reverse function exists', () => {
    expect(reverseInt).toBeDefined()
  })

  test('ReverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0)
  })

  it.each`
    value    | expectedValue
    ${5}     | ${5}
    ${15}    | ${51}
    ${90}    | ${9}
    ${2359}  | ${9532}
    ${-5}    | ${-5}
    ${-15}   | ${-51}
    ${-90}   | ${-9}
    ${-2359} | ${-9532}
  `(
    'returns $expectedValue when number is $value ',
    ({ value, expectedValue }) => {
      const reversed = reverseInt(value)
      expect(reversed).toBe(expectedValue)
    }
  )
})
