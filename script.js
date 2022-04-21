// Assignment Code
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password}
// let generateBtn = document.querySelector("#generate");// When user clicks on GamepadButton, function runs.
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
// Add event listener to generate button (line 11 was changed 4/21)
generateBtn.addEventListener("click", writePassword);
// Variable Declarations
let lowerAlphabet= "abcdefghijklmnopqrstuvwxyz";
let upperAlphabet=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolChoice=  "!#$%&()*+-:;^_|`',./{}=<>?@~";
let numberChoice=  "0123456789";
let lengthInput= "";
let passFinish= "";
let passwordMust= "";
// function to generate the password by mixing the user's chosen characteristics
function generatePassword(){
  //user defines password length
  // User prompts
let lengthInput= window.prompt('Enter your password length from 8-128 characters:');
if (lengthInput<8 || lengthInput>128) {
  alert("You MUST enter a number between 8 and 128!");
// } if (lengthInput); {
//   alert("You must enter a numeric value from 8-128") if they do not enter a number between 8 and 128
return lengthInput;
}

{
// Prompts user to say "cancel"= do not include and "okay"= include
let lowerLetters = window.confirm("Include lowercase letters?")
if (lowerLetters === true) {
passwordMust = passwordMust.concat(lowerAlphabet);
}
let upperLetters = window.confirm("Include uppercase letters?")
if (upperLetters === true) {
passwordMust = passwordMust.concat(upperAlphabet)
}
let symbolYes = window.confirm("Include symbols?")
if (symbolYes === true) {
passwordMust = passwordMust.concat(symbolChoice)
}
let numberYes = window.confirm("Include numbers?")
if (numberYes === true) {
passwordMust = passwordMust.concat(numberChoice)
}

else {
if ((upperLetters === false) && (lowerLetters === false) && (numberYes === false) && (symbolYes === false)) {
alert('At least one of the password criteria must be chosen.');
}

    }                     
}
// this math  addition randomizes the user's selections and mixes it to create a unique password 
for (var i = 0; i < lengthInput; i++ ) {
passFinish = passFinish + passwordMust.charAt( Math.floor(Math.random() * (passwordMust.length)));
} 
// loops the prompt again for the user to generate another password
return passFinish
}