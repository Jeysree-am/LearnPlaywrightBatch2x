let config1={browser:"chrome",timeout:3000};
//Modifying properties is allowed
config1.browser="Firefox";
config1.timeout=2000;
config1.retries=2;
console.log(config1);

config1={browser:"Safari"};
console.log(config1);
console.log("=========================");

const config={browser:"chrome",timeout:3000};
//Modifying properties is allowed
config.browser="Firefox";
config.timeout=2000;
config.retries=2;
console.log(config);
//config={browser:"safari"}; 
//will get error as assignment of constatnt variable is not allowed
console.log(config);



