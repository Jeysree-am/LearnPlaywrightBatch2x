//Scope in Functions

let env="staging";
function setconfig(){
    let  timeout=3000;
    console.log(env); //staging
    console.log(timeout);//3000

}
setconfig();
console.log(env);//No Error as it is declared outside the function and has global scope
console.log(timeout);//ReferenceError: timeout is not defined
//Variables declared with let, const, or var 
// inside a function have function 
// scope and cannot be accessed outside 
// that function. To use the value outside,
//  either return it from the function or declare the variable in an outer scope.