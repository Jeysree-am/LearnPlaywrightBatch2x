function makeRetryTracker(max){
    let attempt=0;
    function tryagain(testName){
        attempt++;
        if(attempt>max){
            return `${testName} exceeeded maximum retry attempts ${max}`;
                    }
            return`Attempt ${attempt}/${max}for ${testName}`;
    }
    return  tryagain ;
}
let retry=makeRetryTracker(3);
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));   