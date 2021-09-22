const { reverseBuiltInFunctionsCombined: reverseString } = require('./index')

describe('returns a given string in reverse', () => {
  test('Reverse function exists', () => {
    expect(reverseString).toBeDefined()
  })
  it.each`
    value                  | expectedValue
    ${'abcd'}              | ${'dcba'}
    ${'  abcd'}            | ${'dcba  '}
    ${'Learning To Code!'} | ${'!edoC oT gninraeL'}
  `(
    'returns $expectedValue when string is $string ',
    ({ value, expectedValue }) => {
      const reversed = reverseString(value)
      expect(reversed).toBe(expectedValue)
    }
  )
})
