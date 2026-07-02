let apiCall=new Promise(function(resolve,reject)
{
    reject("500 Error");
});
apiCall.then(function(response){
    console.log(response.status);
    console.log(response.body);
}).catch(function(error){
    console.log(error);
})
//catch is called when promise is reject and then is ignored or skipped completely