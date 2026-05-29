function userLogin(username,password){
    if(username==="admin" && password==="admin123"){
        return "Login Successful";
    }
    else{
        return "Login Failed";
    }
}
let result = userLogin("admin","admin123");
console.log(result);    
let result1 = userLogin("admin","wrongpassword");
console.log(result1);
console.log("------------Function as Expression-----------------------------------");

//FUnction as Expression
let login = function(username,password){
    if(username==="admin" && password==="admin123"){
        return "Login Successful";
    }
    else{
        return "Login Failed";
    }
};
let result2 = login("admin","admin123");
console.log(result2);
let result3 = login("admin","wrongpassword");
console.log(result3);