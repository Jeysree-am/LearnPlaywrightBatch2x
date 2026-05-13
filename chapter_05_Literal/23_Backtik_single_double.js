/**
 * 23_Backtik_single_double.js
 * Difference between single quotes, double quotes, and backticks in JavaScript.
 */

// ============================================================================
// SINGLE QUOTES ('') vs DOUBLE QUOTES ("") vs BACKTICKS (``)
// ============================================================================
// Single and double quotes are identical — both create plain strings.
// Backticks create "template literals" which support multi-line text and
// variable/expression interpolation using ${...}.

const name = "Playwright";

// Single quote
const single = 'Hello, ' + name + '!';  // concatenation needed for variables

// Double quote
const double = "Hello, " + name + "!";  // same as single, just different wrapper

// Backtick (Template Literal)
const backtick = `Hello, ${name}!`;     // direct interpolation, cleaner syntax

// Backticks also support multi-line strings naturally
const multiLine = `Line 1
Line 2
Line 3`;

console.log("Single :", single);
console.log("Double :", double);
console.log("Backtick:", backtick);
console.log("Multi-line:\n" + multiLine);

// KEY TAKEAWAY:
// Use single/double quotes for simple strings.
// Use backticks when you need interpolation or multi-line strings.
