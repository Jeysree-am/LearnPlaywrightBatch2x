//Real QA Scenario
//openbrowser()
//gotoLoginpage()
//enter credentials()
//click login()


function openbrowser(callback){
    console.log("opening the chrome browser")
    setTimeout(function(){
        callback();
    },1000);
}
function gotoLoginpage(callback){
    console.log("step 2:Login page loaded")
    setTimeout(function(){
        callback();
    },2000);
}
function Entercrdentials(callback){
    console.log("step 3: credentials entered")
    setTimeout(function(){
        callback();
    },3000);
}
function Loginclick(callback){
    console.log("step 4:Login button is clicked")
    setTimeout(function(){
        callback();
    },1000);
}

//Calling the function will like Hell

openbrowser(function(){
    gotoLoginpage(function(){
        Entercrdentials(function(){
            Loginclick(function(){
                console.log("Test is complete!")
            })
        })
    })
})