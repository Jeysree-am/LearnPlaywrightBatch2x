function retry(testName,maxRetries=3,delay=1000){
    console.log(`Retrying ${testName}up to ${maxRetries} times with ${delay} ms delay`);
}
retry("Login Test");
retry("Signup Test",5);
retry("Payment Test",4,2000);
//In calling function if we do not pass 
// value for maxRetries and delay 
// then default value will be used. 
// If we pass value then that value 
// will be used instead of default value.