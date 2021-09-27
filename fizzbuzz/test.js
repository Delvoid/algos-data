const { fizzBuzz } = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

describe('FizzBuzz', () => {
  test('fizzBuzz function exists', () => {
    expect(fizzBuzz).toBeDefined();
  });
  it('returns 5 print statments when value passed is 5', () => {
    fizzBuzz(5);
    expect(console.log.mock.calls.length).toEqual(5);
  });

  it('returns fizz when number is a multiple of 3', () => {
    fizzBuzz(3);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
  });
  it('returns buzz when number is a multiple of 5', () => {
    fizzBuzz(5);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
  });
  it('returns fizzbuzz when number is a multiple of 3 & 5', () => {
    fizzBuzz(15);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
  });
});
