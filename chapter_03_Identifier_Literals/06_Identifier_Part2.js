/*1. camelCase
- First word lowercase, each subsequent word starts with a capital letter.
- Commonly used for variables and functions in JavaScript.
*/
var firstName = "Alice";
var totalAmount = 99.99;
var isUserActive = true;
var getUserData = "John";
//---

/*2. PascalCase
- Every word starts with a capital letter.
- Commonly used for class names and constructor functions.
*/
var FirstName = "Alice";
var TotalAmount = 99.99;
var UserProfile = "Admin";
var PaymentGateway = "Stripe";
//---
/*3. snake_case
- All lowercase with words separated by underscores.
- Sometimes used for constants or database field names.
*/      
var first_name = "Alice";
var total_amount = 99.99;
var is_user_active = true;
var user_data = "John";
//---




// Hungarian Notation (Older Style of Variable Declaration)
// ========================================================
// A naming convention where the variable name is prefixed with
// one or more lowercase letters indicating the data type or purpose.
// Very popular in older languages like C, C++, and VB.
// In JavaScript, it is considered outdated and not recommended today,
// but you may still encounter it in older codebases.

/*
    Common Hungarian Notation Prefixes:
    -----------------------------------
    Prefix   Meaning                Example
    ------   -------                -------
    s        String                 sName, sMessage
    n        Number                 nCount, nTotal
    b        Boolean                bIsActive, bFlag
    a        Array                  aNames, aItems
    o        Object                 oUser, oConfig
    fn       Function               fnCallback, fnHandler
    i        Integer (index)        i, j (loop counters)
    el       DOM Element            elButton, elDiv
    arr      Array                  arrData, arrList
    str      String                 strTitle, strPath
    num      Number                 numPrice, numScore
    bool     Boolean                boolEnabled, boolValid
    re       Regular Expression     rePattern, reEmail
    d        Date                   dToday, dCreated
    rx       Regular Expression     rxPattern
*/

// Hungarian notation examples (older style - NOT recommended in modern JS)
var sName = "Alice";
var nAge = 25;
var bIsStudent = true;
var aColors = ["red", "green", "blue"];
var oPerson = { name: "Bob", age: 30 };
var fnGreet = function() { return "Hello"; };
var elButton = document.getElementById("btn"); // if running in browser

// In modern JavaScript, use descriptive camelCase instead:
// var name = "Alice";
// var age = 25;
// var isStudent = true;
// var colors = ["red", "green", "blue"];
// var person = { name: "Bob", age: 30 };
// var greet = function() { return "Hello"; };
