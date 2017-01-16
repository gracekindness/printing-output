///*global confirm, console, prompt*/
//
//// prompt()
//var name = prompt("Please enter your name");
//console.log("Hello " + name);
//
//// confirm()
//var deleted = confirm("Do you really want to delete this file?");
//console.log("deleted = " + deleted);
//
//// conditions 
//var today = prompt("Enter a day");
//
//if (today === "Saturday") {
//    console.log("I will go skiing!");
//}
//}else {
//    console.log("I will watch a movie!");
//}
//
//// for multiple conditions
//var today = prompt("Enter a day");
//var temperature = -10;
//
//if ((today === "Saturday" ) && (temperature > -15)) {
//    console.log("I will go skiing!");
//}else if ((today === "Saturday" ) && (temperature > -15)) {
//    console.log("I will go hiking!");
//}else {
//    console.log("I will watch a movie!");
//}
//
//// typical example in programming:
//var a;
//if(!a) {
//    prompt("Assign variable a!");
//}
//
//console.log("!a = " + !a);

// in-class assignment - task 1
var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n--------\n\n" + 
      " a + b = " + (a + b) + "\n" +
      " a - b = " + (a - b) + "\n" +
      " a * b = " + (a * b) + "\n" + 
      " a / b = " + (a / b) + "\n" + 
      " a % b = " + (a % b) + "\n" +
      " a += 1 = " + (a += 1) + "\n" +
      " a -= 1 = " + (a -= 1) + "\n" +
      " a *= b = " + (a *= b) + "\n" +
      " a /= b = " + (a /= b) + "\n" +
      " a %= b = " + (a %= b) + "\n" +
      " a == b = " + (a == b) + "\n" +
      " a != b = " + (a != b) + "\n" +
      " a > b = " + (a > b) + "\n" +
      " a < b = " + (a < b) + "\n" +
      " !a && !c = " + (!a && !c) + "\n" +
      " !a || !c = " + (!a || !c) + "\n" 
);
    
// task 2
var first_name = "Chaela";
var last_name = "Kindness";
var email = "kind0016@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + ". " + "You can contact me at " + email + " . ";
alert(output);  

// task 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];

if (sum % 2 === 1 ) {
    alert((numbers[0]) + "/n" +
    "This is an odd number");
}else {
    alert("This is an even number");
}


// ARRAYS

var test_array = [
    "first",
    "second",
    "third"
];

console.log(test_array);

// push() method of array:
test_array.push("fourth", "fifth");

console.log(test_array);

// push method of array:
test_array.splice(0, 0, "new_first");
console.log(test_array);
        
// associative arrays, objects
var computer = {
    "processor": "i7",
    "HD": "1TB",
    "RAM": "16GB"
};

// Arrray syntax to access an array element
console.log(computer["processor"]);

// Dot notation for accessing array element:
console.log(computer.processor);
    

