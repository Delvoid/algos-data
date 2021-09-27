// INSTURCTIONS
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// EXMAPLE
// fizzBuzz(5);
// 1
// 2
// fizz
// 4
// buzz

//SOLUTION 1
const fizzBuzz = (n) => {
  //loop n times
  for (let i = 1; i <= n; i++) {
    //check if number is multiple of 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      // check if number is multiple of 3
      console.log('fizz')
    } else if (i % 5 === 0) {
      // check if number is multple of 5
      console.log('buzz')
    } else {
      //return number
      console.log(i)
    }
  }
}

//SOLUTION 2
const fizzBuzz2 = (n) => {
  for (let i = 1; i <= n; i++)
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

//SOLUTION 3
const fizzBuzzRecursion = (n) => {
  let counter = 1
  const recursion = (counter) => {
    if (counter > n) return
    const fizz = counter % 3 === 0
    const buzz = counter % 5 === 0
    // console.log(fizz ? (buzz ? 'fizzbuzz' : 'fizz') : buzz ? 'buzz' : counter)
    console.log((fizz ? 'fizz' : '') + (buzz ? 'buzz' : '') || counter)
    recursion(counter + 1)
  }
  recursion(counter)
}

module.exports = {
  fizzBuzz,
}
