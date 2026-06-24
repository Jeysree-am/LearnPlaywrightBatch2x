const obj1={a:1,b:2};
const obj2={c:3,d:4};
const copy={...obj1};
console.log(copy);

let config1={browser:"chrome",timeout:3000};
//Modifying properties are allowed
config1.browser="Firefox";
config1.timeout=5000;
config1.retries=2;
console.log(config1);
config1={browser:"Safari"};
console.log(config1);

const config={browser:"chrome",timeout:3000};
//Modifying properties are allowed
config.browser="Firefox";
config.timeout=5000;
config.retries=2;
console.log(config);
//config={browser:"Safari"};//Will get error when Assignment to constant variable
console.log(config);