class Student{
    constructor(student_name,age,phonenbr){
        this.student_name=student_name;
        this.age=age;
        this.phonenbr=phonenbr;
    }
    static project="Playwright2x";
    static Mentor="Pramod";
    static display(){
        console.log("Hi Iam a common function");
    }
}

let s1= new Student("Jeysree",40,"9876544333");
let s2= new Student("Prabha",35,"9876543322");


console.log(s1.student_name);//Individual object
console.log(s2.student_name);

console.log(Student.Mentor);//Common for class
console.log(Student.project);


Student.display();// Static function call as its common for all object