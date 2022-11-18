
// Two slashes start a comment

// Anything after the slashes is ignored by the computer,
// it's mostly used to describe what's going on.

///////////////
// Variables //
///////////////

// Variables are like little boxes, you can put things in them!

var someVariable             // This tells the computer that I want a variable named someVariable

var v = 42                   // This creates a new variable v and it is holding the number 42

var s = "Some Letters"       // Variables can hold sequences of letters called "strings"

var b = true                 // Variables can also hold true or false

var empty = null             // Variables can also be null, which is kind of like being empty

empty = "Not any more"       // With just the =, we can give any variable a new value

v = "42"                     // Tricky! v is the characters "4" then "2".  It's a string.

var n = Number(v)            // Number is a way we can change from a string to a number.  n is the number 42 here.


////////////
// Output //
////////////

// We can send output to the "console", which you can see by opening up Developer Tools in your browser.

console.log("This string gets sent to the developer console.")

console.log(n)               // Remeber our variable n?  This shows what's in it by sending it to the console.


//////////
// Math //
//////////

// With variables and numbers, we can do math things to them

var x = 8
var y = 2
var z = x + y                // z is 5
console.log(z)

console.log(x - y)           // 6
console.log(x * y)           // multiplication gets us 16
console.log(x / y)           // division gets us 4
console.log(Math.min(x, y, z)) // Math.min looks for the smallest number in the things you give it. This is 2 (y is 2).
console.log(Math.max(x, y, z)) // Math.max then looks for the largest number. It's 8.

x = x + 1                    // A variable can even use itself in a calculation.  This takes x and increases its value by 1.
x++                          // We do this so much, that ++ is a shorter way to write the same thing.
x--                          // And -- decreases the value by 1.


///////////
// Loops //
///////////

// Math is fine for calculators, but computers are interesting because you can do many things quickly.

// A while loop will keep going as long as some condition is true
var times = 1
while (times < 10) {         // This loop will keep going as long as times is less than 10.
    console.log(times)
    times++
}                            // The { } curly braces mark the start and end of the while loop.

// A for loop is the same thing, but lets us write it more concisely.
// There are 3 parts in a for loop, separated by ;
// The first part is the variable we want to use.  We're using "i" here, which is just like "times" in the above while loop.
// The second part is the comparison, just like "times < 10" above.
// The third part is what to do after each loop, like "times++" above.
for (var i = 1; i < 10; i++) {
    console.log(i)
}
  

//////////////////////
// Comparing things //
//////////////////////

// We used < in the above loops to compare values, but there's more ways to check.
console.log(2 < 4)           // less than: true
console.log(2 > 4)           // greater than: false
console.log(2 <= 4)          // less than or equal to: true
console.log(2 >= 4)          // greater than or equal to: false
console.log(2 === 4)         // equal to each other: false
console.log(2 !== 4)         // not equal to each other: true

// We can do this with strings as well
console.log("dog" === "cat") // false
console.log(s !== "cat")     // true

// The if statement lets us compare a value and only do something if it's true.
if ("dog" === "cat") {
  console.log("Something weird has happened.")
}

// We can test for two things by using || to see if one or the other is true.
if (2 > 4 || 6 < 8) {
    console.log("The math checks out.")
}

// And using && checks two things to ensure both are true.
if (2 < 4 && 6 > 8) {
    console.log("Numbers no longer have meaning.")
}

// We can add an else statement to do something different if the comparison is false.
if (2 > 4) {
  console.log("We will never see this happen.")
} else {
  console.log("Of course this is correct.")
}


///////////////////
// String things //
///////////////////

// If you use + on strings, it sticks them together, called concatenation.
var firstName = "Pete";
var lastName = "Vasi";
var fullName = firstName + " " + lastName; // fullName is now "Pete Vasi"

// We can also change the case of strings
console.log(firstName.toLowerCase())       // "pete"
console.log(firstName.toUpperCase())       // "PETE"

// trim gets rid of extra spaces at the beginning and the end.
var airy = "    I'm in space "
console.log(airy.trim())                   // "I'm in space"

// replace changes from one thing to another
console.log(firstName.replace("e", "i"))   // "Piti"

// substring

// indexOf


//////////////////////////////
// Arrays (lists of things) //
//////////////////////////////

var myList = []
let fruits = ["apples", "oranges", "bananas"]
myList = ['banana', 3, "salad", "milk"]

fruits[0]
fruits[1]

fruits[1] = "mango"
fruits[1] = 3

// append

for (var item of fruits) {
    console.log(item)
}

for (let i = 0; i < myList.length; i++) {
    console.log("The value is: " + myList[i])
}
