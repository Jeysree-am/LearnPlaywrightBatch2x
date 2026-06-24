let str="     Hello, World!    ";
console.log(str.toUpperCase());//prints HELLO, WORLD!
console.log(str.toLowerCase());//prints hello, world!   
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg="Test:Fail. Retry:Fail";
console.log(msg.replace("Fail","Pass"));//replaces only the first occurrence of Fail with Pass
console.log(msg.replaceAll("Fail","Pass"));//replaces all occurrences of Fail with Pass 
console.log(msg.replace(/Fail/g,"Pass"));//replaces all occurrences of Fail with Pass using regex   

//concatenation
console.log("hello"+" "+"world");//prints hello world
console.log("hello".concat(" ","world"));//prints hello world   
console.log(`${str} ${"world"}`);//prints Str content and  world using backticks and template literals



let url="https://app.vwo.com?app=Jeysree";
console.log(url.replace(/app/g,"qa"));//replaces all occurrences of app with qa using regex

let r="pass,fail,retry,skip".split(",");
console.log(r);

let rr="Test_Login_Pass".split("_").join(" ");
console.log(rr);

let parts=["2024","06","12"];
 let date=parts.join("-");//prints 2024-06-12
console.log(date);