//Higher order functions are functions 
// that can take other functions 
// as arguments or return functions
//  as their result. T
// hey are a powerful feature of JavaScript and are commonly used in functional programming.



function runWithLoggin(testfn,testName){
    let result=testfn();
    return result;
}
function loginTest(){
return "Login Test Passed";
}
function regTest(){
    return "Registration Test Passed";
}
console.log(runWithLoggin(loginTest,"Login Test"));
console.log(runWithLoggin(regTest,"Registration Test"));
        
