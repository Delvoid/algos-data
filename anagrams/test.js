const { anagram, cleanString } = require('./index.js')

describe('Anagram', () => {
  test('anagram function exists', () => {
    expect(typeof anagram).toEqual('function')
  })

  it.each`
    value                        | value2                           | expectedValue
    ${'hello'}                   | ${'llohe'}                       | ${true}
    ${'Whoa! Hi!'}               | ${'Hi! Whoa!'}                   | ${true}
    ${'One One'}                 | ${'Two two two'}                 | ${false}
    ${'One One c'}               | ${'One One'}                     | ${false}
    ${'A tree, a life, a bench'} | ${'abA tree, a fence, a yardba'} | ${false}
  `('returns $expectedValue when comparing string $value1 to $value2 ', ({ value, value2, expectedValue }) => {
    const isAnagram = anagram(value, value2)
    expect(isAnagram).toBe(expectedValue)
  })
})

describe('cleanString', () => {
  test('cleanString function exists', () => {
    expect(typeof cleanString).toEqual('function')
  })

  it.each`
    value                        | expectedValue
    ${'eDcbA'}                   | ${'abcde'}
    ${'One One c'}               | ${'ceennoo'}
    ${'A tree, a life, a bench'} | ${'aaabceeeefhilnrt'}
  `('returns $expectedValue when given $value', ({ value, expectedValue }) => {
    const clean = cleanString(value)
    expect(clean).toBe(expectedValue)
  })
})
