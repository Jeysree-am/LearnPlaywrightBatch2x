//Primitive vs Ref
let a=10;
let b=a;
 b=99;
console.log(a);
console.log(b);

//Objects -Copied by Reference,Call by Ref
//Reference=array,object,Function
let obj1={value:10};
let obj2=obj1;
obj2.value=100;
console.log(obj1.value);
