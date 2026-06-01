
//Closure is when an inner function remembers and can access variables from its outer function — even after the outer function has finished executing.
function outer()
{
    let message="Hello";
    console.log("Outer function called");
    function inner()
    {
        console.log(message);
    }
    return inner;

}
let innerFn = outer();
innerFn();
//inner();

