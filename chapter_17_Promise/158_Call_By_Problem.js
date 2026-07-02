function openBrowser(){
    return new Promise(function(resolve)
    {
        resolve("Browser is opened");

    })
}

function goTOLogin(){
    return new Promise(function(resolve)
    {
        resolve("Login Page is opened");
    })   

}
function EnterCredentials(){
return new Promise(function(resolve)
{
    resolve("Credentials are entered");
} )

  }

function clickLogin(){
    return new Promise(function(resolve)
    {
        resolve("Login button is clicked");
    })
}



    openBrowser().then(function(response){
        console.log(response);
        return goTOLogin();
    }).then(function(response){
        console.log(response);
        return EnterCredentials();
    }).then(function(response){
        console.log(response);
        return clickLogin();
    }).then(function(response){
        console.log(response);
    }   ).catch(function(error){
        console.log(error);
    }).finally(function(){
        console.log("This is finally block");
    }   );