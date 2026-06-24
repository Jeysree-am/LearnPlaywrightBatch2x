let Matrix=[
    ["login","pass", 200],
    ["Checkout","fail", 404],
    ["search","pass", 180]
];
//How many testcases have been executed?
//How many test cases are passed?
//What is the status code of test cases which is fail?

for(let i=0;i<Matrix.length;i++){
    for( let j=0;j<Matrix[i].length;j++){
        
       
        console.log(Matrix[i][j]);
        
    }
    console.log("\n");
    


}
console.log("No.of Test cases Executed :" ,Matrix.length);


