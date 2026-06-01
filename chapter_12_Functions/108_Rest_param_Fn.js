//Rest of the parameters
//Rest parameter is used to represent an indefinite number of arguments as an array
//Rest parameter is denoted by three dots ... followed by the parameter name
//Rest parameter must be the last parameter in the function definition      


function logResult(suiteName,...testResults){
    console.log(`Test Suite: ${suiteName}`);
    console.log(testResults);
}
    
logResult("Login Test Suite","Test 1: Passed","Test 2: Failed","Test 3: Passed");
logResult('Reg Test',"Hello","Jeysree");


