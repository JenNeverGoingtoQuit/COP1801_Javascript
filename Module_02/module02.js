// Module 02 Assignment
// This program demonstrates how JavaScript creates variables,
// stores values, and determines data types.

// Ask the user for their first name and store it in Fname
let Fname = prompt("Please enter your first name:");

// Display a welcome message that contains the name entered
document.write("<h2>Hello " + Fname + "!</h2>");

// Create the constant myPi to store Pi to 7 significant digits
const myPi = 3.1415926;

// Ask the user to input their favorite number and store it in myFavNum
let myFavNum = Number(prompt("Please enter your favorite number:"));

// Calculate the area of a circle using the favorite number as the radius
// Formula: A = πr²
let myArea = myPi * (myFavNum * myFavNum);

// Display the contents of each variable with descriptive text
document.write("<p>Your first name (Fname) is: " + Fname + "</p>");
document.write("<p>Your favorite number (myFavNum) is: " + myFavNum + "</p>");
document.write("<p>The value of Pi (myPi) is: " + myPi + "</p>");
document.write("<p>If your favorite number was the radius of a circle, the area (myArea) would be: " + myArea + "</p>");
