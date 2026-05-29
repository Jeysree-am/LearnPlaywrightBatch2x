//Arrow Function
//Arrow function is a shorter syntax for writing function expressions
//Arrow function does not have its own this keyword and cannot be used as a constructor
//Arrow function is always anonymous and cannot be named    
const greet =function(name){
    return `Hello ${name}`;
}
let message = greet("Jeysree");
console.log(message);

const greet2 =name1=> `Hello ${name1}`;
let message2 = greet2("Sree");
console.log(message2);
//normal function to Arrow function is 
//Remove the function keyword remve the return,remove the curly braces and add => after the parameters


const add =(a,b)=> a+b;
let sum = add(10,20);
console.log("The Total is: " + sum);    

const doubleInt=num=>num*2;
let doubled = doubleInt(5);
console.log("The Doubled Value is: " + doubled);    

const printMessage=name2=>console.log(`Welcome ${name2}`);
printMessage("Prabha");