//console.log(Score);
//const Score = 100;
//TDZ is created for Score and it is not accessible before initialization, so we get reference error if we try to access Score before initialization
//It is similar for let and const  for TDZ and hoisting, but the main difference is that const does not allow reassignment while let allows reassignment.

if(true) 
    {
       const score=200;
        console.log(score);
     } //Reference error as TDZ is created for Score and it is not accessible before initialization