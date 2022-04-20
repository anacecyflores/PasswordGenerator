// Assignment Code
var generateBtn = document.querySelector("#generate");
// When user clicks on GamepadButton, function runs.
let generateBtn = document.querySelector("#generate")
let passwordText = document.querySelector("#password")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Variable Declaration
var lowerAlphabet= [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var upperAlphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
var symbolChoice= ["!","@","#","$","%","&","^","&","*","?"]
var numberChoice=  ["1","2","3","4","5","6","7","8","9","0"]
// User prompting length of password
let lengthInput =window.prompt("Enter your password length from 8-128 characters:")
// function
function createPassword() {

var lengthInput= window.prompt('Enter your password length from 8-128 characters:')

if (lengthInput<=8 || lengthInput>=128);{
    alert("You MUST enter a number between 8 and 128!");
    createPassword ();
  } elseif (lengthInput === null);} {
    alert("You must enter a numeric value")
    createPassword (); 

// Prompts
if (confirm( "Uppercase?" === true{
  lowerAlphabet = window.confirm("Include lowercase letters?"),
  upperAlphabet = window.confirm("Include uppercase letters?");
  symbolChoice = window.confirm("Include symbols?"),
  numberChoice = window.confirm("Include numbers?")
}

console.log(passwordText)
console.log(passwordText.value)

else {
  ( confirm( "uppercase" != false) {

  }



confirm( "Lowercase?")


confirm( "numbers?")


confirm( "symbols?")



// Write password to the #password input
function writePasword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");}

  passwordText.value = password; 