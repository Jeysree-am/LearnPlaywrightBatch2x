async function testapi(){
    try{
        let result=await Promise.resolve("API Call is Success");
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Test Completed");      
    }
}
testapi();
