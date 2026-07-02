let apiCall=new Promise(function(resolve,reject)
{
    resolve({
        status:200,body:"userdata"
    })

})
apiCall.then(function(response){
    console.log(response.status);
    console.log(response.body);
})

//.then() method is used when resolve s