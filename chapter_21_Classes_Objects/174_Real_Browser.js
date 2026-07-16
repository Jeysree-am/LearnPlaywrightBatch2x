class Testcase{

    constructor(name,status,priority){
        this.name=name;
        this.status=status;
        this.priority=priority;
    }
    display(){   //Method
        console.log(this.name + ":"+this.status +"|" + this.priority);
    }
}

// function(){

// }
let Tc1=new Testcase("Login Page","Pass","P0");
Tc1.display();
let TC2=new Testcase("Signup","Block","P1");
TC2.display();

//Function vs Method
//Function is used outside the class
//Method is used inside the class 