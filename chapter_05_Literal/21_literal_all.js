/**
 * 21_literal_all.js
 * Comprehensive guide to all supported types of literals in JavaScript.
 */

// ============================================================================
// 1. STRING LITERALS
// ============================================================================
// A sequence of characters enclosed in single quotes, double quotes, or backticks.

const singleQuote = 'Hello, Playwright!';
const doubleQuote = "Automation is fun!";
const withEscapes = "Line 1\nLine 2\tTabbed";

console.log("--- String Literals ---");
console.log(singleQuote);
console.log(doubleQuote);
console.log(withEscapes);

// ============================================================================
// 2. TEMPLATE LITERALS (Template Strings)
// ============================================================================
// Enclosed in backticks (`). Support multi-line strings and interpolation.

const name = "Batch2x";
const multiLine = `This is line one.
This is line two.`;
const interpolated = `Welcome, ${name}!`;
const expression = `2 + 3 = ${2 + 3}`;

console.log("\n--- Template Literals ---");
console.log(multiLine);
console.log(interpolated);
console.log(expression);

// ============================================================================
// 3. NUMBER / NUMERIC LITERALS
// ============================================================================
// Integers, floats, and numbers in different bases.

const integer = 42;
const negativeInt = -10;
const floatingPoint = 3.14159;
const scientific = 1.5e3;        // 1500
const scientificSmall = 1.5e-3;  // 0.0015
const binary = 0b1010;           // 10 in decimal
const octal = 0o17;              // 15 in decimal
const hexadecimal = 0x1A;        // 26 in decimal

console.log("\n--- Numeric Literals ---");
console.log("Integer:", integer);
console.log("Negative:", negativeInt);
console.log("Float:", floatingPoint);
console.log("Scientific (1.5e3):", scientific);
console.log("Scientific (1.5e-3):", scientificSmall);
console.log("Binary (0b1010):", binary);
console.log("Octal (0o17):", octal);
console.log("Hexadecimal (0x1A):", hexadecimal);

// ============================================================================
// 4. BIGINT LITERALS
// ============================================================================
// Whole numbers larger than 2^53 - 1. Append 'n' to the integer.

const bigOne = 9007199254740991n;
const bigTwo = 123456789012345678901234567890n;
const bigFromNumber = BigInt(9876543210);

console.log("\n--- BigInt Literals ---");
console.log("BigInt:", bigOne);
console.log("BigInt Large:", bigTwo);
console.log("BigInt from Number:", bigFromNumber);

// ============================================================================
// 5. BOOLEAN LITERALS
// ============================================================================
// Only two values: true and false.

const isActive = true;
const isComplete = false;

console.log("\n--- Boolean Literals ---");
console.log("isActive:", isActive);
console.log("isComplete:", isComplete);

// ============================================================================
// 6. NULL LITERAL
// ============================================================================
// Represents the intentional absence of any object value.

const emptyValue = null;

console.log("\n--- Null Literal ---");
console.log("null value:", emptyValue);
console.log("typeof null:", typeof emptyValue); // "object" (historic JS quirk)

// ============================================================================
// 7. UNDEFINED (Conceptual Literal)
// ============================================================================
// A variable that has been declared but not assigned a value.

let notAssigned;
const explicitlyUndefined = undefined;

console.log("\n--- Undefined ---");
console.log("notAssigned:", notAssigned);
console.log("explicitlyUndefined:", explicitlyUndefined);

// ============================================================================
// 8. ARRAY LITERALS
// ============================================================================
// Ordered list of values enclosed in square brackets [].

const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [42, "text", true, null, { key: "value" }];
const nested = [[1, 2], [3, 4], [5, 6]];
const sparse = [1, , 3]; // sparse array with empty slot

console.log("\n--- Array Literals ---");
console.log("Empty:", emptyArray);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Nested:", nested);
console.log("Sparse:", sparse);

// ============================================================================
// 9. OBJECT LITERALS
// ============================================================================
// Collection of key-value pairs enclosed in curly braces {}.

const emptyObject = {};
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isAdmin: false,
  greet: function() {
    return "Hello!";
  },
  // ES6 shorthand method syntax
  bye() {
    return "Goodbye!";
  }
};
const withQuotes = {
  "full name": "Jane Doe",
  "1key": "starts with number"
};

console.log("\n--- Object Literals ---");
console.log("Empty:", emptyObject);
console.log("Person:", person);
console.log("Greet:", person.greet());
console.log("Bye:", person.bye());
console.log("Quoted key:", withQuotes["full name"]);

// ============================================================================
// 10. REGEXP LITERALS
// ============================================================================
// Pattern enclosed between slashes /pattern/flags.

const pattern1 = /ab+c/i;       // matches "abc", "abbc", etc. (case-insensitive)
const pattern2 = /\d+/g;        // matches one or more digits globally
const pattern3 = /^hello$/m;    // multiline anchor

const testString = "The price is 100 dollars and 50 cents.";

console.log("\n--- RegExp Literals ---");
console.log("/ab+c/i tests 'Abc':", pattern1.test("Abc"));
console.log("/\\d+/g matches:", testString.match(pattern2));

// ============================================================================
// 11. SYMBOL LITERALS
// ============================================================================
// Created via Symbol() or Symbol.for(). Used for unique identifiers.

const sym1 = Symbol("description");
const sym2 = Symbol("description");
const symGlobal = Symbol.for("globalKey");

console.log("\n--- Symbol Literals ---");
console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("sym1 === sym2:", sym1 === sym2); // false, every Symbol is unique
console.log("Global Symbol:", Symbol.for("globalKey") === symGlobal); // true

// ============================================================================
// SUMMARY TABLE
// ============================================================================
console.log("\n========== SUMMARY OF JAVASCRIPT LITERALS ==========");
console.log("1. String          : 'text', \"text\"");
console.log("2. Template        : `text ${var}`");
console.log("3. Number          : 42, 3.14, 0b1010, 0o17, 0x1A, 1.5e3");
console.log("4. BigInt          : 9007199254740991n");
console.log("5. Boolean         : true, false");
console.log("6. Null            : null");
console.log("7. Undefined       : undefined");
console.log("8. Array           : [1, 2, 3]");
console.log("9. Object          : { key: 'value' }");
console.log("10. RegExp         : /pattern/flags");
console.log("11. Symbol         : Symbol('desc')");
console.log("=====================================================");
