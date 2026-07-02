//callback with parameters

function runtest(testName,callback){
    let status="Pass";
    callback(testName,status);
}
runtest("Login_Test",function(name,result){
    console.log(name +"=>"+result);

});

//sync call back
let bugs=['UI GLITCH','API TIMEOUT','WRONG REDIRECT'];
bugs.forEach(function(bug,i){
    console.log(i+"=>"+bug);
});
console.log("Total no.of bugs"+"=>"+bugs.length)