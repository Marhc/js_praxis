/**
 * Playing around with ***'gcd function'*** implementations.
 *
 * Features included in this module:
 *  - Console Output;
 *  - Console Input with Third-Party ***Readline-sync*** Library;
 *  - Function Definition;
 *  - Module Import;
 *  - String Interpolation with ***'Template Strings'***;
 *  - String Substitution with Third-Party ***Sprintf-js*** Library
 *  - String Padding;
 *  - Tagged Templates;
 *  - Spread Operator (**'...'**);
 *  - Object Literal Values;
 *  - Type Conversion;
 *  - Destructuring Assignment;
 *  - Max built-in function;
 *  - Third-Party ***Math.js*** Library;
 *  - While loop;
 *  - Modulus / remainder operator (**'%'**);
 *  - Docstrings (***jsdoc + markdown***);
 *
 * @module gcd
 */

const question = require("readline-sync").question;
const { gcd } = require("mathjs");
const vsprintf = require("sprintf-js").vsprintf;
const { divisors } = require("./divisors");

/**
 * Calcs the gcd using the list of dividers
 *
 * @param {number} num1 An integer number > 0
 * @param {number} num2 An integer number > 0
 * @returns {number} The result of gcd.
 */
function gcdFactors(num1, num2) {
  const firstDivisors = divisors(num1);
  const secondDivisors = divisors(num2);
  const maxDivisor = Math.max(
    ...firstDivisors.filter((item) => secondDivisors.includes(item))
  );

  return maxDivisor;
}

/**
 * Calcs the gcd by Euclidian Algorithm
 *
 * @param {number} num1 An integer number > 0
 * @param {number} num2 An integer number > 0
 * @returns {number} The result of gcd.
 */
function gcdEuclidian(num1, num2) {
  while (num2 > 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

const firstNumber = parseInt(question("Type the first number: "));
const secondNumber = parseInt(question("Type the second number: "));

const factorsGcd = {
  label: "GCD by factors",
  value: gcdFactors(firstNumber, secondNumber),
};

const euclidianGcd = [
  "GCD by Euclid".padEnd(14),
  gcdEuclidian(firstNumber, secondNumber),
];

const mathGcd = ["GCD by Math.js", gcd(firstNumber, secondNumber)];

/**
 * Tagged Template to pad gcd out in the right way.
 * 
 * @param {null} _ The formatted mask strings
 * @param  {...any} args The interpolated values
 * @returns {string} The padding output
 */
const fgcd = (_, ...args) => `${args[0].padEnd(14)}: ${args[1]}`

// New Style with Template Strings
console.log(`\n${factorsGcd.label.padEnd(14)}: ${factorsGcd.value}`);

// Enhanced New Style with Tagged Templates
console.log(fgcd`${factorsGcd.label}: ${factorsGcd.value}`);

// Console.log emulating printf
console.log("%s: %d", ...euclidianGcd);

// Enhanced Old Style with sprintf-js Library
console.log(vsprintf("%-14s: %d", mathGcd));
