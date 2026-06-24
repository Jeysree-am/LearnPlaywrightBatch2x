const user={
    firstName:"Jeysree",
    lastName:"AM",
    get fullName(){
        return this.firstName+this.lastName;
    },
    set fullName(value){
[this.firstName,this.lastName]=value.split(" ");

    }

}
//this means current value in object
console.log(user.fullName);
user.fullName="Amit Sharma";
console.log(user.fullName);