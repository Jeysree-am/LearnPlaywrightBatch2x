//Iterate is to Go from One to Another
let tests=["Login","Checkout","Search"];
for(let i=0;i<tests.length;i++)
{
    console.log(tests[i]);
    
}

console.log("-----------------");
for(test of tests)
{
    console.log(test);
}

console.log("-------------------");
tests.forEach((i, index) => {
    console.log(i,index);
});

console.log("--------------");
let students=["Ravi","Rajesh","Arun","Rahul"];
for(let student in students)
{
    console.log(student,"->",students[student]);//Index=in

}

console.log("-----------------");
for(let[i,test] of tests.entries()){
    console.log(i,test);

}