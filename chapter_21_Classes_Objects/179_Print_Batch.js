class Student{

    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    //static variable
    static batchName ="PlayWright2x";

    print(){
        console.log("Name:"+this.name + " "+ "Age :"+ this.age + " "+"Course :"+this.course +" "+ Student.batchName);
    }
    static batchInfo(){
        console.log(Student.batchName);
    }
}
let student_details = [
    new Student("Jeysree",40,"PW + AI"),
    new Student("Vani",20,"PW"),
    new Student("Manu",30,"PW + AI"),
    new Student("Nisha",42,"Selenium"),
    new Student("Raja",40,"PW + AI"),
    new Student("Fahad",42,"MCP"),
    new Student("Rahul",20,"PW + AI"),
    new Student("Arun",23,"PW + AI"),
    new Student("Mani",44,"Selenium + AI"),
    new Student("Rajesh",36,"PW + AI")
    
]
student_details.forEach(students=>students.print());
Student.batchInfo();
