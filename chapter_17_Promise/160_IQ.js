// let p = new Promise(function(resolve,reject){
//     resolve(42);
// })
// p.then(function(value){
//     console.log("Answer:" + value);
// })
//console.log("===================");
// let p1 = new Promise(function(resolve,reject){
//     reject("Error:500");
// })
// p1.then(function(value){
//     console.log("Answer:" + value);
// }).catch(function(error){
//     console.log(error);
// })  


// let q =Promise.resolve(5);
// q.then(function(value){
//      return value*10;
   
// }).then(function(value){
//     console.log("Answer:" + value);
// });


//  Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     });



    //  Promise.resolve("start")
    // .then(function (val) {
    //     console.log(val);
    //     throw new Error("Broke at step 2");
    // })
    // .then(function () {
    //     console.log("This will NOT run");
    // })
    // .catch(function (err) {
    //     console.log("Caught:", err.message);
    // });



    // Promise.reject("Test failed")
    // .then(function (data) {
    //     console.log("Data:", data);
    // })
    // .catch(function (err) {
    //     console.log("Error:", err);
    // })
    // .finally(function () {
    //     console.log("Cleanup done");
    // })


//     Promise.resolve("Quick win").then(function (msg) {
//     console.log(msg);
// });

// Promise.reject("Quick loss").catch(function (msg) {
//     console.log(msg);
// });




// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (results) {
//     console.log(results);
// });


// let t1 = Promise.resolve("PASS");
// let t2 = Promise.reject("FAIL");
// let t3 = Promise.resolve("PASS");

// Promise.all([t1, t2, t3])
//     .then(function (r) { console.log("All:", r); })
//     .catch(function (err) { console.log("Stopped:", err); });


Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    });
});

/* output
{ status: 'fulfilled', value: 'API 200' }
{ status: 'rejected', reason: 'API 500' }
{ status: 'fulfilled', value: 'API 201' } */