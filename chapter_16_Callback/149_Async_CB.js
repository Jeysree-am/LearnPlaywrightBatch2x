console.log("Test 1 :Started");
setTimeout (function(){
    console.log("Test 2:API Response Received");
},2000);

console.log("Test 3:Moving to Next Test");

//This is example of Asynchronous call back function where the line 2 is executed later 
//that is 2 seconds after the execution of Test 3