/**
 * Solving the classic ***FizzBuzz*** challenge.
 *
 * This example implements FizzBuzz as a function.
 *
 * Features included in this module:
 *  - Console Output;
 *  - Function Definition;
 *  - String Interpolation with ***'Template Strings'***;
 *  - Docstrings (***jsdoc + markdown***);
 *  - Single line and Multiline comments;
 *  - Conditional Statements;
 *  - For loop;
 *  - Modulus / remainder operator (***'%'***);
 *  - Default export;
 *
 * @module fizzbuzz
 */

/**
 * For the given number, returns the correct answer in the Fizzbuzz game.
 *
 * @param { number } num An integer number > 0
 * @returns { string } A string corresponding to the game answer.
 * @alias module:fizzbuzz
 */
function fizzbuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return `${num} - FizzBuzz`;
  } else if (num % 3 == 0) {
    return `${num} - Fizz`;
  } else if (num % 5 == 0) {
    return `${num} - Buzz`;
  } else {
    return `${num}`;
  }
}

if (require.main === module) {
  /* Skips execution when importing the module,
  but allows it when calling the script. */

  for (item = 1; item <= 100; item++) {
    console.log(fizzbuzz(item));
  }
}

// Exports the fizzbuzz function as default export
module.exports = fizzbuzz;
