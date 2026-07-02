let order = new Promise(function(resolve,reject)
{
    let foodReady=true;
    if(foodReady)
        {
        resolve("Food is Ready");
    }
        else {
            reject("order is cancelled as food not ready");
            }    
})
console.log(order);