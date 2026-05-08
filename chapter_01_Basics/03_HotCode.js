function add(a,b){
    return a+b;

}
let result = add(10,20);
console.log(result);
for(let i=0;i<100000;i++){
    add(i,i+1);
}
console.log("After 100000 iterations",result);
