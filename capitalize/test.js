const { capitalize } = require('./index')

describe('Capitalize', () => {
  test('capitalize function exists', () => {
    expect(typeof capitalize).toEqual('function')
  })

  it.each`
    value                  | expectedValue
    ${'not like this'}     | ${'Not Like This'}
    ${'a short sentence'}  | ${'A Short Sentence'}
    ${'learning to code!'} | ${'Learning To Code!'}
  `('returns $expectedValue when given $value', ({ value, expectedValue }) => {
    const cap = capitalize(value)
    expect(cap).toBe(expectedValue)
  })
})
