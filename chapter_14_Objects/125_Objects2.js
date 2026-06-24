//Objects
//Key-Value Pairs
let student1={
    name:"John",
    age:20};
let student2={
    name:"Alice",
    age:22};
    let student3={
        name:"Bob",
        age:24,city:"New York"
    };
console.log(student1);
console.log(student2);
console.log(student3);

//Keys will not be in double quotes, but values will be in double quotes if they are strings. This is a common convention in JavaScript objects.
//JSON - JavaScript Object Notation- All will be in double quotes
let jsonstr={"name":"John","age":30,"city":"New York"};
console.log(jsonstr);

let a={status:"Pass"};
console.log(a.status);
let a1={status:'pass'};
console.log(a1.status);

let b= a;
b.status='fail';
console.log(a.status);
console.log(b.status);

if(b === a)
{
    console.log("true");
}
else{
    console.log("false");
    }
