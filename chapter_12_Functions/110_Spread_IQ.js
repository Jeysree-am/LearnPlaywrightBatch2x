function add(a,b,c){
    return a+b+c;
}
    let num =[1,2,3];
    result=add(...num);
    console.log(result); //6    
//Spread operator- It is used to spread the elements of an array or object into individual elements

//Return value but it will not print until we give console.log



let responses=[200,201,400,404];
function hasError(...codes){
    return codes.some(code=>code>=400);
}
console.log(hasError(...responses)); //true

