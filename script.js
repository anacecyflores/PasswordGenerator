// Assignment Code
// Write password to the #password input
function writePasword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password}
// let generateBtn = document.querySelector("#generate");// When user clicks on GamepadButton, function runs.
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// Variable Declaration
let lowerAlphabet= "abcdefghijklmnopqrstuvwxyz";
let upperAlphabet=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolChoice=  "!#$%&()*+-:;^_|`',./{}=<>?@~";
let numberChoice=  "0123456789";
let lengthInput= "";
let passFinish= "";
let passwordMust= "";
// function
function writePassword(){
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  };
// generatePassword();
function generatePassword(){
      //user defines password length
      // User prompts
let lengthInput= window.prompt('Enter your password length from 8-128 characters:');
if (lengthInput<8 || lengthInput>128) {
    alert("You MUST enter a number between 8 and 128!");
  // return lengthInput;
  };
// Prompts:
if (lengthInput === true){
  lowerLetters = window.confirm("Include lowercase letters?");
  if (lowerLetters === true) {
    passwordMust = passwordMust.concat(lowerAlphabet);
}
  upperLetters = window.confirm("Include uppercase letters?");
  if (upperLetters === true) {
    passwordMust = passwordMust.concat(upperAlphabet);
}
  symbolYes = window.confirm("Include symbols?");
  if (symbolChoice === true) {
    passwordMust = passwordMust.concat(symbolChoice)
  numberYes = window.confirm("Include numbers?");
}
if (numberChoice === true) {
  passwordMust = passwordMust.concat(numberChoice)
}
if ((upperAlphabet === false) && (lowerAlphabet === false) && (numberChoice === false) && (symbolChoice === false)) {
  alert('At least one of the password criteria must be chosen.');
 //generatePassword() sends the user to main prompt start over
}
//loop 
(passwordMust);
{for (var i = 0; i < lengthInput; i++ ) 
    passFinish = passFinish + passwordMust.charAt( Math.floor(Math.random() * (passwordMust.length)));
    return passFinish }     
    }
}
  