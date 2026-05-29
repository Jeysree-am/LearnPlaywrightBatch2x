let a=[5,3];
let b=[10,12];
//let c=a+b;
let c=a.concat(b)//Concat-joins two arrays and creates a new array
console.log(c);
let d=[...a,...b];//Spread operator
console.log(d);
let s=["pass","fail","skip"].join("|");//Join-joins all elements of an array into a string
console.log(s);
