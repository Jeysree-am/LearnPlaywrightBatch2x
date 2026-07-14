function apicall(name){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(name,"API Response Received");
        },2000);        
});
}

async function sequential(){
    let r1=await apicall("Auth service");
    console.log(r1);
    let r2=await apicall("User service");
    console.log(r2);
    let r3=await apicall("Product service");
    console.log(r3);
}   
sequential();


