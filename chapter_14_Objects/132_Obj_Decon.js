const user={
    name:"Alice",
    age:20,
    City:"NY"
};
//Basic Destructuring
const{name,age}=user;
console.log(age);
console.log(user);
//Renamng Variables
const {name:username,age:userage}=user;
console.log(username);

//default Values
const {country="USA"}=user;
console.log(country);
console.log(user);

