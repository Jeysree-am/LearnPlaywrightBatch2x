var a=10;
let b=20;
const c=3.14;

console.log(a);
console.log(b);
console.log(c);
var browser = "Chrome";
var browser = "Firefox";// var allows redeclaration
browser = "Edge";// var allows reassignment
console.log(browser);


var testcases=["login","signup","logout"];
for(var i=0;i<testcases.length;i++){
    console.log(testcases[i]);
}
console.log("loop counter outside the loop: " + i); // i is accessible outside the loop due to var's function scope



