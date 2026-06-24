const user={
    name:"John",
    Age:35,
    email:"john123@example.com"
};
console.log(user.name);
console.log(user["Age"]);
console.log(user);

//Dynamic Property access
const key="Age";
console.log(user[key]);

//Adding/Modifying properties
user.Age=40;
user.city="NY";
console.log(user);

let obj={name:"Login"};
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
//Output
/*{
  value: 'Login',
  writable: true,
  enumerable: true,
  configurable: true
}*/