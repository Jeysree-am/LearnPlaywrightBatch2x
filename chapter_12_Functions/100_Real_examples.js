function createIdButton(name){
    return "js-basic-"+name.toLocaleLowerCase().replace(/\s+/g, '-');

}
console.log(createIdButton("Submit Button"));
console.log(createIdButton("Cancel Button")); 


//API Validation
function isStatuscode(code){
    if(code>=200 && code<300){
        return "Success";
    }else if(code>=400 && code<500){
        return "Client Error";
    }
}
console.log("Statuscode(200): " + isStatuscode(200));
console.log("Statuscode(404): " + isStatuscode(404));