function runTest(name,status,duration){
    return `The Test ${name} is ${status} and it took ${duration} seconds to execute`;
}
const r=runTest("Login Test","passed",5);
console.log(r);