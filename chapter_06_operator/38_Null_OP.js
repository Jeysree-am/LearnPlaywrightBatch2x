console.log(null>=0); //Output: true
console.log(null===0); //Output: false

//Nullish
let score=null;
console.log(score); //Output: null
let result=score??"No score available";
console.log(result); //Output: "No score available"