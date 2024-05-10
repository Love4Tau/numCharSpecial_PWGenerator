// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  //Defining valid characters
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passw = "";
  const allChars = upperCase + lowerCase + number + symbols;
  //Asking for user input for character length
  const length = prompt("Please choose a password between 8 and 128 characters.");

  //Making sure value is valid/complies with requirements
  if (length < 8 || length > 128 || isNaN(length)){
    alert ("Your password does not meet requirements. Please enter another number.");
    return;
  } else {
    //loops through to meet length requirements
    for(i = 0; i < length; i++){
      passw += allChars[Math.floor(Math.random() * allChars.length)];
    }
    //returns generated password
    return(passw)
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
