function createUser(name,role){
    return {
        name: name,
        role: role
    };
}
let user1= createUser("Jeysree","Admin");
console.log(user1);
let user2= createUser("Sree","User");
console.log(user2);
let user3= createUser("Prabha","Readonly");
console.log(user3);