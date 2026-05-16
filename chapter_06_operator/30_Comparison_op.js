// comparison operator  true or false its boolean operator

const a = 10;   
const b = 20;
const c = '10';

console.log('a < b:', a < b);            // true
console.log('a <= b:', a <= b);          // true
console.log('a > b:', a > b);            // false
console.log('a >= b:', a >= b);          // false
//== loose equality operator  compares values after type coercion   
//  and === strict equality operator compares values without type coercion  
console.log('a == c:', a == c);          // true (value comparison)
console.log('a === c:', a === c);        // false (type + value comparison)

console.log('a != b:', a != b);          // true
console.log('a !== c:', a !== c);        // true

console.log('b === 20:', b === 20);      // true
console.log('b !== 20:', b !== 20);      // false
