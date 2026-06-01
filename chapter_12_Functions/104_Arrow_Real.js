//THis is perfect function
function statusCode(status){
    if(status==200 && status<=300)
        {
            console.log("The Requestis fine");
        }
    }

//Function as Expression
const statusCode_Exp = function(status){
    if(status==200 && status<=300)
        {
            console.log("The Requestis fine");
        }
    }
    //Arrow Function
const statusCode_Arrow = (status) => {
    if(status==200 && status<=300)
        {
            console.log("The Requestis fine");
        }   
    }
    statusCode_Arrow(200);