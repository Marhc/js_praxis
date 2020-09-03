/**
 * This is a playground with a ***'proper divisors'*** function.
 *
 * Features included in this module:
 *  - Console Output;
 *  - Console Input with Third-Party ***Readline-sync*** Library;
 *  - Function Definition;
 *  - Module Import;
 *  - String Interpolation with ***'Template Strings'***;
 *  - Type Conversion;
 *  - Arrow Functions;
 *  - For loop;
 *  - Ranges with Third-Party ***Lodash*** Library;
 *  - Modulus / remainder operator (**'%'**);
 *  - Conditional Statements;
 *  - Array Filter;
 *  - Array Join;
 *  - Literal notation for Arrays (***'Array literal values'***);
 *  - Single line and Multiline comments;
 *  - Docstrings (***jsdoc + markdown***);
 *  - Named export;
 *
 * @module divisors
 */

const { question } = require("readline-sync");
const range = require("lodash").range;

/**
 * Gets the list of the proper divisors.
 *
 * @param {number} num An integer number > 0
 * @returns {Array.<number>} An array of integers corresponding to the list of divisors.
 * @static
 */
function divisors(num) {
  const factors = [1];
  for (let factor = 2; factor <= num; factor++) {
    if (num % factor == 0) {
      factors.push(factor);
    }
  }
  return factors;
}

/**
 * Gets the list of the proper divisors using an arrow function.
 *
 * @param {number} num An integer number > 0
 * @returns {Array.<number>} An array of integers corresponding to the list of divisors.
 * @static
 */
const divisorsList = (num) =>
  range(1, num + 1).filter((item) => num % item == 0);

if (!module.parent) {
  /* Skips execution when importing the module,
  but allows it when calling the script. */

  const inputNumber = parseInt(question("Type a integer number > 0: "));

  console.log(`Divisors = { ${divisors(inputNumber).join(", ")} }`);
  console.log(`Divisors = { ${divisorsList(inputNumber).join(", ")} }`);
}

// Named export: Exports many functions as an object.
module.exports = {
  divisors: divisors,
  divisorsList: divisorsList,
};
