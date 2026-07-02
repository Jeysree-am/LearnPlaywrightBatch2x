let testresults=['pass','fail','Skip','block'];

testresults.forEach(function(result,index){
    console.log("Test"+index+"=>"+result);
})

//This is perfect Synchronous call back function where item is executed 1 by 1 