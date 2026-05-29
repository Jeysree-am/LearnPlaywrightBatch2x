let numbers=[2,4,6];
let squares=numbers.map(num=>num*num);
console.log(squares);
//o/p [ 4, 16, 36 ] //Prints the square of each number in the array

console.log("-----------------------------");
let names=["Alice","Bob","Charlie"];
let nameLength=names.map(n=>n.length);
console.log(nameLength);
//o/p [ 5, 3, 7 ] //Prints the length of each name in the array     
console.log(" ------------ Convert to Uppercase----------");
let uppercase=names.map(n=>n.toUpperCase());
console.log(uppercase);
//o/p [ 'ALICE', 'BOB', 'CHARLIE' ] //Prints the names in uppercase 
console.log(" ------------ Map with Objects----------");
//Convert Arrays to objects
let users=[{name:"John",age:30,city:"NY"},
    {name:"Alice",age:25,city:"LA" },
    {name:"Bob",age:35,city:"Chicago"}
];
let username =users.map(u=>u.name);
console.log(username);
//o/p [ 'John', 'Alice', 'Bob' ] //Prints the names of users in the array

let status=["Pass","Fail","Pass","Skip","Pass"];
let count=status.map(s=>count[s]= (count[s]||0)+1, count={});
console.log(count);