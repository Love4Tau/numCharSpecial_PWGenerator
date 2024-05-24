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
  var allChars = [];
  //Asking for user input for character length
  const length = prompt("Please choose a password between 8 and 128 characters.");

  //Making sure value is valid/complies with requirements
  if (length < 8 || length > 128 || isNaN(length)){
    alert ("Your password does not meet requirements. Please enter another number.");
    return;
  } 
    // Prompted for user input and assigned that input
      const upCase = confirm('Do you want to include uppercase letters in your password? Please click "cancel" if you do not want uppercase letters.')
      const lowCase = confirm('Do you want to include lowercase letters in your password? Please click "cancel" if you do not want lowercase letters.')
      const num = confirm('Do you want to include numbers in your password? Please click "cancel" if you do not want numbers.')
      const specialChars = confirm('Do you want to include symbols in your password? Please click "cancel" if you do not want symbols.')

    // Ensuring user picks out criteria for password
      if(upCase === false && lowCase === false && num === false && specialChars === false) {
        alert ("Your password does not meet requirements. Please choose valid criteria for password.");
      return;
    } else {

    // Validating user input and to allChars if input is equal to true
      if(upCase === true) {
        allChars += upperCase;
      }

      if(lowCase === true) {
        allChars += lowerCase;
      }

      if(num === true) {
        allChars += number;
      }

      if(specialChars === true) {
        allChars += symbols;
      }

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
