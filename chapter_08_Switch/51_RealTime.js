let responseCode=201;
switch(responseCode){
    case 200:
        console.log("Success"); 
        break;
    case 201:
        console.log("Resource created");        
        break;
    case 400:
        console.log("Bad request");     
        break;
    case 404:
        console.log("Resource not found");     
        break;  
        default:
        console.log("Unknown response code"); 
}