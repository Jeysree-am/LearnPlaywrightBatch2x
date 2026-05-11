//let is block scoped and does not allow redeclaration but allows reassignment
let x=10;
console.log(x);
x=20;
console.log(x);
//let is block scoped, so it is not accessible outside the loop
for(let i=0;i<5;i++){
    console.log(i);
}
//console.log("loop counter outside the loop: " + i); // i is not accessible outside the loop due to let being block scoped     
/*we get reference error if we try to access i outside the loop.
as it is block scoped */
//Block scope
//{}
// if ()
//function(){}


let name="John";
name="Doe";
console.log(name);
{
    let name="Alice"; // This 'name' is different from the outer 'name'
}
function printName() {
    
        let name = "Alice"; // This 'name' is different from the outer 'name'
    
}
    printName();
    printName();

