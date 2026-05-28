let fruits=["banana","cherry","apple"];
fruits.sort();
console.log(fruits);
//Arrays will always sort in aphabetical order as it deals as string

let number=[3,1,4]
number.sort();
console.log(number);
let nums=[10,1,20,2];
nums.sort();
console.log(nums);
//o/p [ 1, 10, 2, 20 ]
//sorting is called lexicographic sorting
//incase if the number to be sorrted in ascending or descending order it shoyuld explicitly defined
nums.sort((a,b)=>a-b);
console.log(nums);
nums.sort((a,b)=>b-a);//descending order
console.log(nums);
