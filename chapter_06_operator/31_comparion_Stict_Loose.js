//number == string
console.log(5 == "5"); //true--loose comparison operator--compares values after type coercion
//number === string
console.log(5 === "5"); //false --Strict Comparison operator--compares values without type coercion 
console.log(0 == false); //true--loose comparison operator--compares values after type coercion
console.log(0 === false); //false --Strict Comparison operator--compares values without type coercion
console.log(0 ==" "); //true--loose comparison operator--compares values after type coercion
console.log(0 === " "); //false --Strict Comparison operator--compares values without type coercion
console.log(null == undefined); //true--loose comparison operator--compares values after type coercion
console.log(null === undefined); //false --Strict Comparison operator--compares values without type coercion    
console.log(true== 2); //false--loose comparison operator--compares values after type coercion
console.log(true === 2); //false --Strict Comparison operator--compares values without type coercion