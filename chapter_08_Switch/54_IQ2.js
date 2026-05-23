let x=10;//if two matches are there in switch case then only first one will be executed and second one will be ignored because of break statement in first case. If break statement is not there in first case then both cases will be executed.    
switch(x)
{
    case 10:
        console.log("x is 10");
        break;
        case 10:
            let a=20;
            console.log("x is 10 and a is "+a);
    default:
        console.log("x is not 10");
}