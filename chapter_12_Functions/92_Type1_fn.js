//Type -1 Function has no argument no return value
function sayHello(){
    console.log("Hello How are you?");
}   
//Calling the function
sayHello();

let a = sayHello();//its called again but it will not return any value because function has no return statement 
    
console.log(a); //undefined - because function has no return value
