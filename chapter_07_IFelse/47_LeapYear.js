//Leap Year check
//Rules for leap year:
//1. Year is divisible by 4, but not by 100, OR
//2. Year is divisible by 400
let year=2022;
if((year%4===0 && year%100!==0) || (year%400===0))
{
    console.log(year+" is a leap year");
}
else
{
    console.log(year+" is not a leap year");
}   