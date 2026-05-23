let loggedIn=true;
let userRole="xyz";
if(loggedIn){
    if(userRole==="admin"){
        console.log("Welcome Admin");
    }
    else 
            if(userRole==="editor"){
        console.log("Welcome Editor you have edit access");
    }
    else
        if(userRole==="viewer")         
        {
        console.log("Welcome User you have Read only access");
    }
    else
    {
        console.log("Welcome Guest you have limited access");
    }  
}         
    else
    {
        console.log("Please log in to continue");
    }