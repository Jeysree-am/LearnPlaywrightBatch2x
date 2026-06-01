//Function that calls by iteslf is called IIFE(Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE");
})();//This is an IIFE

(function(){
    console.log("Staging Environment");
})();

//Arrow function
(()=>{
    console.log("This is an IIFE using Arrow Function");    
})();