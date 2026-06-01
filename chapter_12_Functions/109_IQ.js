//Return a value
function statusCode(code){
    if(code>=200 && code<300) return "Success";
    if(code>400 && code<500) return "Client Error";
    if(code>=500) return "Server Error";
    }

    statusCode(200);
    statusCode(404);
    statusCode(500);
    //O/p:No value is printed as we are not printing the return value of the function
    //To print the return value we can store it in a variable and then print it
    let r1 = statusCode(200);
    console.log(r1);




/*No Retun value*/

//function logTest(name){
   // console.log(`The Test ${name} is executed`);    
   // }    
   // let result=logTest("Login Test");
    //console.log(result); //undefined as the function does not return any value



greet("Jeysree");
function greet(name){
    return "Hello "+name;
    }    

//Reference error as the function is not hoisted as it is a function expression
    sayHello("Jeysree");
    const sayHello = function(name){
        return "Hello "+name;
        };
