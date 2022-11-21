/**
 * The program shows what the energy is released
 *   when user enters mass.
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-14
 */
/**
 * The function gets the reversestring
 *
 * @param {string} string - string value
 * @returns {string} - Retrub value
 */

function reverseString(string: string): string {
  if (string === '') {
    return string
  } else {
    return reverseString(string.slice(1, 10)) + string[0]
  }
}

function main() {
  const aString = 'recursion'

  console.log('')
  console.log(`The orignal string is: ${aString}`)
  console.log(`The reversed string is: ${reverseString(aString)}`)
  console.log('\nDone')
}

main()
