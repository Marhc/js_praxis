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
 *  - Spread Operator (**'...'**);
 *  - Object Literal Values;
 *  - Type Conversion;
 *  - Destructuring Assignment;
 *  - Set Intersection Operator (**'&'**);
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
  label: "GCD by factors".padEnd(14),
  value: gcdFactors(firstNumber, secondNumber),
};

const euclidianGcd = [
  "GCD by Euclid".padEnd(14),
  gcdEuclidian(firstNumber, secondNumber),
];

const mathGcd = ["GCD by Math.js", gcd(firstNumber, secondNumber)];

// New Style with Template Strings
console.log(`\n${factorsGcd.label}: ${factorsGcd.value}`);

// Console.log emulating printf
console.log("%s: %d", ...euclidianGcd);

// Enhanced Old Style with sprintf-js Library
console.log(vsprintf("%-14s: %d", mathGcd));
