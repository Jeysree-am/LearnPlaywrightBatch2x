class person{

constructor(){
    console.log("This will be created when the object is created");
}
//Attributes
name;
email;
salary;
//Behavior
sleep(){ }
work(){ }
}
let obj_ref=new person();
//obj_ref is the object reference variable which will hold the address of the object created in heap memory
//new person() will create the object in heap memory and return the address of the object created
//console.log(obj_ref);
//output
//person { name: undefined, email: undefined, salary: undefined }
