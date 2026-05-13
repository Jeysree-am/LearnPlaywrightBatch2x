
//let is block scoped
let x="global";
if(true) {
    

    //Reference error as TDZ is created for x and it is not accessible before initialization
    //console.log(x); //let is block scoped, so the value of x inside the block is not affected by the value of x outside the block   

    
    let x="local";
    console.log(x);
}

console.log(x); //let is block scoped, so the value of x outside the block is not affected by the value of x inside the block
