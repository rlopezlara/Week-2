 
    /* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    var myName;
    var myAge;


    /* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
 myName = "Rodrigo";
 myAge = 34;
 console.log((myName) + " - " + typeof (myName));
 console.log((myAge) + " - " + typeof (myAge));
    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
myAge = 43;
myAge = "fourty- three";

    // STEP 4: Variable types
    // Numbers
var num1 = 50;
console.log((num1) + " - " + typeof (num1));
var num2 = 19.9999;
console.log((num2) + " - " + typeof (num2));

    // Strings (use '' or "")
var string1 = "hello! how are you?";
console.log((string1) + " - " + typeof (string1));
var string2 = 'hello! how are you?';
console.log((string2) + " - " + typeof (string2));

    // Booleans
var bool1 = true;
console.log((bool1) + " - " + typeof (bool1));
var bool2 = false;
console.log((bool2) + " - " + typeof (bool2));
    // Arrays
var numArray = [10, 20, 30];
console.log((numArray) + " - " + typeof (numArray));

var colorArray = ["Red", 20, "Green"];
    
// Objects

var movieObject = {
    movieName: "Avatar", 
    runTime : 120,
    writers: {
        leadWriter : "ABC Xyz",
        assistant : "Qwe Rty"
    } 
}

    // STEP 5: Typing (JavaScript is a loosely-typed language)
 
