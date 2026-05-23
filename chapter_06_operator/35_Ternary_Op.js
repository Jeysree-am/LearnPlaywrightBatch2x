let temp=23;
let feel=(temp>=40)?"Very Hot":(temp>=30)?"Hot":
(temp>=20)?"Warm":
(temp>=10)?"cool":"Cold";
console.log("temperature", temp,"|feel", feel);


let a =10;
console.log(++a + ++a); //Output: 33
console.log(a);
// maximum of two numbers


 let x=15;
let y=10;
let result =(x>y)?"x is greater ":"y is greater";
console.log(result);

//maximum of three numbers
let p=50;
let q=40;
let r=30;
let max = (p>q&&p>r)?"p is greatest":(q>p&&q>r)?"q is greatest":(r>p&&r>q)?"r is greatest":"some are equal";
console.log(max);


let status_code=400;
let category =(status_code==200)?"Success":
(status_code==400)?"Bad Request":
(status_code==500)?"Internal Server Error":"Unknown Status";
console.log( `${status_code}-${category}`);




















