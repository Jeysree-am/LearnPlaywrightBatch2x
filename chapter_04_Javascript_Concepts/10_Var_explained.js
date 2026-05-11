var x=10;
console.log(x);
//var is function scoped, so it is accessible outside the loop


function printhello()
{
    console.log("check the values of a inside the function");
    var a=20;//local  scope variable
    console.log(a);

    if(true)
    {
        var a=30;
        console.log(a);     
   }
}
printhello();
var a=50;
//var is a flipper and not trust worthy,dual faced