function getusserstatus()
{//console.log(status_code); // Output: undefined as JS Engine optimized the code and moved the declaration of status_code to the top of the function but not the assignment    
    console.log(status_code);
    var status_code = 200;
    console.log(status_code);
}
getusserstatus();

