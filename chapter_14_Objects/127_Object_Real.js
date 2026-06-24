let config={};
config.browser="chrome";
config.timeout=3000;
config.testname="Login_Test";
console.log(config);
delete config.browser;
console.log(config);
if(config.browser==="chrome"){
    console.log("Execute the testcases in Chrome browser");

}
else{
    console.log("Browser config is not available");

}




let config2= {
    browser:"chrome",
    timeout:3000,
    testname:"Login Test"
};
console.log(config2);