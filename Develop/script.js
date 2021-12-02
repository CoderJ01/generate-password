var promptQuestionN = function () {
  var numChars = "";
  
  while (numChars === "" || numChars === null) {
    numChars = prompt("Enter the number of characters (8 - 128) you would like your password to have");
  
  

  if (numChars < 8 || numChars > 128) {
    window.alert("Invalid input. The number of characters need to be between 8 and 128");
  }
  else {
    for (var i = 0; i < numChars; i++) {
      var randomNum = listOfChars[Math.floor(Math.random() * 5)];
    }
  }

}
  
}

var promptQuestionL = function () {
  var lowercase = "";
  var validateL = true;

  lowercase = prompt("Would you like to include lowercase letters in your password?")

  if (lowercase === "yes" || lowercase === "YES") {
    validateL = true;
  }
  else if (lowercase === "no" || lowercase === "NO") {
    validateL = false; 
  }
  else {
    window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
  }
}

var promptQuestionU = function () {
  var uppercase = "";
  var validateU = true;

  uppercase = prompt("Would you like to include uppercase letters in your password?")

  if (uppercase === "yes" || uppercase === "YES") {
    validateU = true;
  }
  else if (uppercase === "no" || uppercase === "NO") {
    validateU = false; 
  }
  else {
    window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
  }
}

var promptQuestionNu = function () {
  var numeric = "";
  var validateNu = true;

  numeric = prompt("Would you like to include numeric characters in your password?")

  if (numeric === "yes" || numeric === "YES") {
    validateNu = true;
  }
  else if (numeric === "no" || numeric === "NO") {
    validateNu = false; 
  }
  else {
    window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
  }
}


var promptQuestionS = function () {
  var special = "";
  var validateS = true;

  special = prompt("Would you like to include special characters in your password?")

  if (special === "yes" || special === "YES") {
    validateS = true;
  }
  else if (special === "no" || special === "NO") {
    validateS = false; 
  }
  else {
    window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
  }
}

promptQuestionN();
promptQuestionL();
promptQuestionU();
promptQuestionNu();
promptQuestionS();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
