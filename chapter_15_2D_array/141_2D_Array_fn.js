let score=[
    [85,90,78],
    [65,40,70],
    [95,98,82]
];
let rowsums=score.map(row=>row.reduce((a,b)=>a+b,0));
console.log(rowsums);

let suite=[
    ["login-pass","register-pass","logout-pass"],
    ["Search-pass","filter-fail","sort-pass"],
    ["checkout-fail","payment-fail","confirm-pass"]
    
];

//Wanted all test case  which have failed

for (let i=0;i<suite.length;i++)
{
    for(let j=0;j<suite[i].length;j++)
    {
        if(suite[i][j].includes("fail")){
            console.log(suite[i][j])
        }
    }
}