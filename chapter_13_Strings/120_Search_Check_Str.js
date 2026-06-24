//Searching and checking
let url="https://staging.vwo.com/api/login?retry=true";


//includes
console.log(url.includes("staging")); //true
console.log(url.includes("production")); //false


//startsWith and endsWith
console.log(url.startsWith("https")); //true
console.log(url.startsWith("http")); //true
console.log(url.startsWith("ftp")); //false
console.log(url.endsWith("retry=true")); //true

//indexOf and lastIndexOf
console.log(url.indexOf("a")); //10
console.log(url.lastIndexOf("a"));//24
console.log(url.indexOf("no there"));//-1
console.log(url.indexOf("x")); //-1

//search
console.log(url.search(/staging/));//8
console.log(url.search(/vwo/));//16