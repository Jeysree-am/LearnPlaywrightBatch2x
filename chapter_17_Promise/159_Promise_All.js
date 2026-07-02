// let checkAuth=Promise.resolve("User is Authenticated");
// let checkDB=Promise.resolve("Database is Connected");
// let checkCache=Promise.resolve("Cache is  OK");

// Promise.all([checkAuth,checkDB,checkCache]).then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
// } )


// Promise.all([
//     Promise.resolve("User is Authenticated"),
//     Promise.reject("Database is not Connected"),
//     Promise.resolve("Cache is  OK")
// ]).then(function(response){
//     console.log(response);
    
// }).catch(function(error){
//     console.log(error);
// })


Promise.allSettled([
    Promise.resolve("User is Authenticated"),
    Promise.reject("Database is not Connected"),
    Promise.resolve("Cache is  OK")
]).then(function(response){
    console.log(response);
}); 

//When .allSettled  is used then the promise will be resolved irrespective of the promise is resolved or rejected   
//When thereis a failure in .all only the catch block is executed and then block is skipped completely  
