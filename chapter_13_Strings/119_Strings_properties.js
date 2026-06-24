console.log(typeof(200)); //number
console.log(typeof("Hello"));
let str="Hello World";
console.log(str.length); //11
console.log(str.toUpperCase());

//Access by Index
console.log(str[0]); //H
console.log(str[6]); //W    
console.log(str.at(-1)); //d
console.log(str.at(-2)); //l
//index=0 and length starts with 1
console.log(str.charAt(0)); //H
console.log(str.charAt(6)); //W
console.log(str.charCodeAt(0)); //72 which is the Ascii code for H
console.log(str.charCodeAt(6)); //87 which is the Ascii code for W  