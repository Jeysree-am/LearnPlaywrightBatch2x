//Checking Arrays
//Check if something is an Array
let result= Array.isArray([1,2,3]);
console.log(result);
let res= Array.isArray("Hello");
console.log(res);
//Every and Some
Arr=[80,90,100].every(s=>s>70);//true
console.log(Arr);

Arr2=[80,90,100].some(s=>s>90);//true
console.log(Arr2);
//Playwright API
statuscode=[201,202,200].every(statuscode=>statuscode>=200&&statuscode<300);//true
console.log(statuscode);
    