// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {

// Variables for user input
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%&*?";
var randomizer = "";
var generator = "";

// Initiate user inputs and generate password
var length = prompt("Please select a character count between 8 and 128.");
if (length < 8 || length > 128 || isNaN(length)) {
  alert("Please enter a number between 8 and 128!");
  generatePassword();
  return;
} else {
  var inputLower = confirm('Would you like lowercase characters? OK = Yes! | Cancel = No!');
  var inputUpper = confirm('Would you like uppercase characters? OK = Yes! | Cancel = No!');
  var inputNumeric = confirm('Would you like numeric characters? OK = Yes! | Cancel = No!');
  var inputSpecial = confirm('Would you like special characters? OK = Yes! | Cancel = No!');
  }
  if (inputLower) {randomizer += lowercase;}
  if (inputUpper) {randomizer += uppercase;}
  if (inputNumeric) {randomizer += numbers;}
  if (inputSpecial) {randomizer += special;}
  for (i = 0; i < length; i++) {
    generator += randomizer[Math.floor(Math.random() * randomizer.length)]
  }
  return(generator);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
