let str="Login_Test_Pass_001";
//slice(startIndex,endIndex) - endIndex is optional and negative index are supported
console.log(str.slice(0,5)); //Login
console.log(str.slice(0,10)); //Login_Test
console.log(str.slice(11)); //Pass_001(as end index is not provided)

let testnbr=str.slice(-3); //001
console.log(testnbr);
console.log(str.includes("Pass")); //true  

//substring(startIndex,endIndex) - endIndex is optional and negative index are not supported
console.log(str.substring(0,5)); //Login
console.log(str.substring(6,10)); //Test
console.log(str.at(0)); //L