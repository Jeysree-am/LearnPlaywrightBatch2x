function apiCall(name){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(name,"API Response Received");
        },2000);    
    })  
}

async function parallel(){
    let [r1,r2,r3]=await Promise.allSettled([
        apiCall("Auth service"),
        apiCall("User service"),
        apiCall("Product service")
        ]);

        console.log(r1);
        console.log(r2);
        console.log(r3);

}

parallel();
