class car{
    //CAB
    //Constructor
    constructor(brand, model, year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    //Attributes
    //Behavior
    drive(){
        console.log("Which Car is driving? "+this.brand+" "+this.model+" "+this.year);
    }
}
let obj_ref=new car("BMW","X5",2023);
obj_ref.drive();

let obj_ref2=new car("Audi","A6",2024);
obj_ref2.drive();
let obj_ref3=new car("Mercedes","C-Class",2022);
obj_ref3.drive();