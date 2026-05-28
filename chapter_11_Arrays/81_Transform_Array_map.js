let scores=[50,80,70,90,100];
//Map-Transforms every element and creaes a new Array
let grade=scores.map(s=>s>70?"Pass":"Fail");
console.log(grade);
//o/p  [ 'Fail', 'Pass', 'Fail', 'Pass', 'Pass' ]