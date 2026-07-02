function cafe(item,callWhenItemisReady){
    console.log("Finding .....1");
    console.log("Finding......2");
    console.log("Finding.....3");
    console.log(item);
    callWhenItemisReady();
}
function callWhenItemisReady(){
    console.log("calling 1234567899");
}

cafe("Tea",callWhenItemisReady);

cafe("Cofee",function(){
    console.log("calling 9876543219");
})

cafe("Horlicks",()=>{
    console.log("calling new number");
});