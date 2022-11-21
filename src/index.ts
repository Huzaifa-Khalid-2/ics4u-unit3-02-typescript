/**
 * This program does factorial recursion
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-11-09
 */

import promptSync from 'prompt-sync'
/**
 *
 * @param {number} someInt parsedInt
 * @returns {number} factorial of number
 */

function factorial(integer: number): number {
  let answer
  if (integer < 0) {
    answer = -1
  } else if (integer === 0) {
    answer = 1
  } else {
    answer = factorial(integer - 1) * integer
  }
  return answer
}

function main() {
  const prompt = promptSync()
  const userNumber = prompt('Enter a Number: ')
  const userInteger = parseInt(userNumber)
  console.log(`The Factorial of ${userInteger} is ${factorial(userInteger)}`)
  console.log('\nDone.')
}
main()
