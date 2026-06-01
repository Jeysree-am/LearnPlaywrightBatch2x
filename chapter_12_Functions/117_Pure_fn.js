//Pure function is a function which always returns the same output for the same input and has no side effects. It does not modify any external state or variables and does not rely on any external state or variables. Pure functions are easier to test and debug because they are predictable and do not have any hidden dependencies.   
function add(a,b){
    return a+b;
}
let sum = add(10,20);
console.log("The Total is: " + sum);    

//Impure function is a function which may return different output for the same input and may have side effects. It may modify external state or variables and may rely on external state or variables. Impure functions are harder to test and debug because they are unpredictable and may have hidden dependencies.
let count = 0;
function increment(){
    count++;
    return count;
}   
console.log(increment()); // 1
console.log(increment()); // 2  
console.log(increment()); // 3



function isPassing(score){
    if(score>=50){
        return true;
    }
    return false;
}
console.log(isPassing(60)); // true
console.log(isPassing(40)); // false        