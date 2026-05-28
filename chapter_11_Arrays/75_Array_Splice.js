let arr=[1,2,3,4,5];
arr.push(6,7);
console.log(arr);
//[1, 2, 3, 4,5, 6, 7]  o/p
//index=0,1,2,3,4,5,6
//Splice(start,delete count,....,Item to add)
//arr.splice(2,1);
//console.log(arr);//o/p  [ 1, 2, 4, 5, 6, 7 ]
//arr.splice(2,0,99)//it only add in the index of 2 as the deletecount is 0
//console.log(arr);
//arr.splice(2,1,99);
//console.log(arr); // o/p[1, 2, 99, 4, 5, 6, 7]
arr.splice(1,2,10,20)
console.log(arr);//o/p [1, 10, 20, 4, 5,  6,  7]

