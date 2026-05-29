function login(username,password)
{
    if(username==="admin" && password==="admin123"){
        return "Login Successful";
    }
    else{
        return "Login Failed";
    }
}
let result = login("admin","admin123");
console.log(result);    
let result1 = login("admin","wrongpassword");
console.log(result1);
