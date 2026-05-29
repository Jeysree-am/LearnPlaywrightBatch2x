//Slicing and combining
//slice(start,end) - returns a new array from start to end-1
let arr=[10,20,30,40,50];
console.log(arr.slice(1,4));   
console.log(arr.slice(2));     //o/p [30, 40, 50]
console.log(arr.slice(-3,-1));
console.log(arr.slice(2,4)); 
   //o/p [30, 40]
   console.log(arr.slice(2,5)); //o/p [30, 40, 50]
console.log(arr.slice(-2)); //o/p [40]
console.log(arr.slice(0)); //o/p [10, 20, 30, 40, 50]
//if end is not given in slice it will take till end of the array
//concat - combines two or more arrays and returns a new array
let arr1=[1,2,3,4,5];
let removed=arr1.splice(2,2);//Splice(start,delete count,....,Item to add)
console.log(arr1);
console.log(removed);   
