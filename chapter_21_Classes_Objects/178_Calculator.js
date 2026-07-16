class Calculator{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    subtraction(){
          let output= this.x-this.y;
         console.log("Subtraction :"+this.x + "-" + this.y +"="+ output);
    }
     multiplication(){
        let result=this.x * this.y;
        console.log("Multiplication :"+this.x +"*"+this.y+"="+ result)
     } 
     divide(){
        if(this.y===0){
            console.log("Cannot divide by zero");
        }
            else{
                let answer= this.x/this.y;
                console.log("Division :"+this.x+"/"+this.y+"="+answer);
            }
        }

        modulus(){
            if(this.y===0){
            console.log("Cannot perform by zero");
        }
            else{
                let modul= this.x % this.y;
                console.log("Modulus :"+this.x+"%"+this.y+"="+modul);
            }

        }
     }   
          
    

// let sub = new Calculator(5,3);
// sub.subtraction();
// let mul=new Calculator(2,4);
// mul.Multiplication();
// let div=new Calculator(8,2);
// div.Divide();
// let mod=new Calculator(5,3);
// mod.Modulus();

let cal= new Calculator(6,3);
cal.subtraction();
cal.multiplication();
cal.divide();
cal.modulus();