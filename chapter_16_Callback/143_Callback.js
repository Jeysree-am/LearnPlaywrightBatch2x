function print(){
    console.log("It is a normal function");
}
function placeorder(item,callback){
    console.log("Hi Order is placed");
    callback();
}
//First way of calling
placeorder("Burger",print);

//Second way of calling
placeorder("Pizza",function(){
    console.log("Iam a Anonymous function without name")
});

//Thirdway of calling Arrow fn
placeorder("pasta",()=>{
    console.log("Arrow function calling without name")
});