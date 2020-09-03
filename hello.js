/**
 * A simple ***"Hello Function"*** for educational purposes.
 *
 * This module explores basic features of the Python programming language.
 *
 * Features included in this module:
 *  - Console Output;
 *  - Console Input with Third-Party ***Readline-sync*** Library;
 *  - Function Definition;
 *  - Module Import;
 *  - Default Parameter Values;
 *  - String Interpolation with '***Template Strings'***;
 *  - Single line and Multiline comments;
 *  - Docstrings (***jsdoc + markdown***);
 *  - 'Falsy' coalescing operator (**'||'**);
 *  - Conditional Statements;
 *  - Custom main entry point and exit point;
 *  - Named export;
 *  - Command line arguments handling;
 *
 * @module hello
 */

const { question } = require("readline-sync");

/**
 * Returns a greeting message with the user name.
 *
 * This is an example of a parameterized function with a default value.
 * If no name is provided the function returns "Hello Everyone!" by default.
 *
 * @param {string} name The user name typed in the Console.
 * @returns {string} The greeting message.
 * @alias module:hello.helloUser
 */
function helloUser(name = "") {
  return `Hello ${name || "World"}!`;
}

function custom_main(argv) {
  // Javascript has no a default main entry point.

  const userName = question("Type your name: ");

  console.log(helloUser(userName));
}

if (require.main === module) {
  /* Skips execution when importing the module,
  but allows it when calling the script. */

  process.exit(custom_main(process.argv));
}

// Exports the helloUser function as named export
exports.helloUser = helloUser;
