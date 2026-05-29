//Type 2 Function with Param but no return value
function greet(name){
    console.log("Hello "+name);
    }
//Calling the function

greet("Jeysree");
let a = greet("Sree");//its called again but it will not return any value because function has no return statement
console.log(a); //undefined - because function has no return value

console.log("***************");

function beggar(money){
    console.log("Thanks for giving "+money);
}
beggar(100);
let returnMeSomething = beggar(200);
console.log(returnMeSomething); //undefined - because function has no return value