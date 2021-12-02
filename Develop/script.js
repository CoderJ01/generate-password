var promptQuestionN = function () {
  var numChars = "";
  
  while (numChars < 8 || numChars > 128) {
    numChars = prompt("Enter the number of characters (8 - 128) you would like your password to have");

    if (numChars < 8 || numChars > 128) {
      window.alert("Invalid input. The number of characters need to be between 8 and 128");
    }
  }
  
  for (var i = 0; i < numChars; i++) {
    var randomNum = listOfChars[Math.floor(Math.random() * 5)];
  }
}

var promptQuestionL = function () {
  var lowercase = "";
  var validateL = true;

  while (lowercase !== "yes" && lowercase !== "YES" && lowercase !== "no" &&  lowercase !== "NO") {

    lowercase = prompt("Would you like to include lowercase letters in your password?")
    
    if (lowercase !== "yes" && lowercase !== "YES" && lowercase !== "no" &&  lowercase !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (lowercase === "yes" || lowercase === "YES") {
    validateL = true;
  }
  else {
    validateL = false; 
  }

  return validateL;
}

var promptQuestionU = function () {
  var uppercase = "";
  var validateU = true;

  while (uppercase !== "yes" && uppercase !== "YES" && uppercase !== "no" &&  uppercase !== "NO") {

    uppercase = prompt("Would you like to include uppercase letters in your password?");

    if (uppercase !== "yes" && uppercase !== "YES" && uppercase !== "no" &&  uppercase !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (uppercase === "yes" || uppercase === "YES") {
    validateU = true;
  }
  else {
    validateU = false; 
  }
}

var promptQuestionNu = function () {
  var numeric = "";
  var validateNu = true;

  while (numeric !== "yes" && numeric !== "YES" && numeric !== "no" &&  numeric !== "NO") {

    numeric = prompt("Would you like to include numeric characters in your password?");

    if (numeric !== "yes" && numeric !== "YES" && numeric !== "no" &&  numeric !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (numeric === "yes" || numeric === "YES") {
    validateNu = true;
  }
  else {
    validateNu = false; 
  }
}

var promptQuestionS = function () {
  var special = "";
  var validateS = true;

  while (special !== "yes" && special !== "YES" && special !== "no" &&  special !== "NO") {

    special = prompt("Would you like to include special characters in your password?");

    if (special !== "yes" && special !== "YES" && special !== "no" &&  special !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (special === "yes" || special === "YES") {
    validateS = true;
  }
  else {
    validateS = false; 
  }
}

// promptQuestionN();
// promptQuestionL();
promptQuestionU();
// promptQuestionNu();
// promptQuestionS();


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
