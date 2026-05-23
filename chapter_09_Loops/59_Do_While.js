let a=10;
while(a>10)
{
    console.log("Inside while loop");
    a++;
}  

//It will not print anything as the condition 
// is false at the beginning itself. 
// It will check the condition first and then it will execute the code inside the loop. As a is 10 and condition is a>10 which is false, it will 
// not execute the code inside the loop even once.

let x=10;
do
{
    console.log("Inside do-while loop");
    x++;
} while(x<10);
