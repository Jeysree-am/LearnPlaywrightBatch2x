/**
 * 32_confusing_comparison.js
 * Confusing comparison examples: Strict (===) vs Loose (==) in JavaScript.
 */

// ============================================================================
// STRICT EQUALITY (===)  vs  LOOSE EQUALITY (==)
// ============================================================================
// === compares VALUE and TYPE (no type coercion)
// == compares VALUE only (performs type coercion before comparison)

console.log("========== NUMBER vs STRING ==========");
console.log("5 == '5'  :", 5 == '5');    // true  -> string '5' coerced to number 5
console.log("5 === '5' :", 5 === '5');   // false -> number !== string

console.log("\n========== NUMBER vs BOOLEAN ==========");
console.log("1 == true  :", 1 == true);    // true  -> true coerced to 1
console.log("1 === true :", 1 === true);   // false -> number !== boolean

console.log("0 == false  :", 0 == false);    // true  -> false coerced to 0
console.log("0 === false :", 0 === false);   // false -> number !== boolean

console.log("\n========== EMPTY STRING vs NUMBER ==========");
console.log("'' == 0   :", '' == 0);     // true  -> empty string coerced to 0
console.log("'' === 0  :", '' === 0);    // false -> string !== number

console.log("'0' == 0  :", '0' == 0);    // true  -> '0' coerced to number 0
console.log("'0' === 0 :", '0' === 0);   // false -> string !== number

console.log("\n========== NULL vs UNDEFINED ==========");
console.log("null == undefined  :", null == undefined);    // true  -> special rule in JS
console.log("null === undefined :", null === undefined);   // false -> different types

console.log("\n========== NULL vs ZERO/FALSE ==========");
console.log("null == 0   :", null == 0);     // false -> null only equals undefined with ==
console.log("null == false:", null == false);  // false -> null does NOT coerce to 0 with ==
console.log("null == ''   :", null == '');     // false -> null does NOT equal empty string

console.log("\n========== UNDEFINED vs ZERO/FALSE ==========");
console.log("undefined == 0    :", undefined == 0);      // false
console.log("undefined == false:", undefined == false);  // false
console.log("undefined == ''   :", undefined == '');     // false

console.log("\n========== ARRAY vs STRING/NUMBER ==========");
console.log("[] == ''     :", [] == '');       // true  -> array coerced to empty string
console.log("[] === ''    :", [] === '');      // false -> object !== string
console.log("[1,2] == '1,2' :", [1,2] == '1,2');  // true  -> array joins to string
console.log("[1,2] === '1,2':", [1,2] === '1,2'); // false -> object !== string

console.log("\n========== ARRAY vs NUMBER ==========");
console.log("[] == 0      :", [] == 0);        // true  -> [] -> '' -> 0
console.log("[1] == 1     :", [1] == 1);       // true  -> [1] -> '1' -> 1
console.log("[2] == 2     :", [2] == 2);       // true  -> [2] -> '2' -> 2
console.log("[1,2] == 1   :", [1,2] == 1);     // false -> '1,2' cannot be coerced to 1

console.log("\n========== OBJECT vs PRIMITIVE ==========");
console.log("{} == '[object Object]' :", {} == '[object Object]');  // true -> object toString()
console.log("{} === '[object Object]':", {} === '[object Object]'); // false
console.log("{} == true  :", {} == true);     // false -> {} toString -> not 'true'
console.log("{} == false :", {} == false);    // false

console.log("\n========== NaN (Not a Number) ==========");
console.log("NaN == NaN   :", NaN == NaN);     // false -> NaN is never equal to anything, even itself!
console.log("NaN === NaN  :", NaN === NaN);    // false
console.log("isNaN(NaN)   :", isNaN(NaN));     // true  -> use this to check NaN
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true -> preferred modern way

console.log("\n========== +0 vs -0 ==========");
console.log("+0 == -0   :", +0 == -0);       // true
console.log("+0 === -0  :", +0 === -0);      // true  -> even strict equality sees them as equal
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false -> Object.is() is truly strict

console.log("\n========== THE CLASSIC TRICKY ONES ==========");
console.log("'' == false     :", '' == false);      // true  -> both coerce to 0
console.log("'' === false    :", '' === false);     // false
console.log("'0' == false    :", '0' == false);     // true  -> '0' -> 0, false -> 0
console.log("'0' === false   :", '0' === false);    // false
console.log("'false' == false:", 'false' == false); // false -> 'false' string cannot coerce to boolean false

console.log("\n========== SUMMARY ==========");
console.log("ALWAYS use === (strict equality) to avoid unexpected type coercion bugs.");
console.log("Use == ONLY when you intentionally want type coercion (rarely needed).");
console.log("For NaN checks, use Number.isNaN() instead of ===.");
console.log("For +0/-0 distinction, use Object.is().");
