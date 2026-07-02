let testRun = new Promise(function(resolve,reject)
{
    let apiCall=true;
    if(apiCall)
        {
            resolve("API Call is Success"+" "+"Status:done");
            }
            else{
                reject("API Call is Failed"+"Status:Error");

            }
        })

        testRun.then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        }).finally(function(){
            console.log("This is finally block");
        })
//Finally block is executed irrespective of the promise is resolved or rejected
//always at the end
