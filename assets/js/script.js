// set up prompts 

var promptQuestionN = function () {
  var numChars = "";
    
  while (numChars < 8 || numChars > 128 || !/^[0-9]+$/.test(numChars)) {
    numChars = prompt("Enter the number of characters (8 - 128) you would like your password to have.");

    if (numChars < 8 || numChars > 128) {
      window.alert("Invalid input. The number of characters need to be between 8 and 128.");
    }

    if (!/^[0-9]+$/.test(numChars)) {
      window.alert("Invalid input. Input needs to be an integer.");
    }
  }
  
  return numChars;
}

var promptQuestionL = function () {
  var lowercase = "";
  var validateL = false;

  while (lowercase !== "yes" && lowercase !== "YES" && lowercase !== "no" &&  lowercase !== "NO") {

    lowercase = prompt("Would you like to include lowercase letters in your password?")
    
    if (lowercase !== "yes" && lowercase !== "YES" && lowercase !== "no" &&  lowercase !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (lowercase === "yes" || lowercase === "YES") {
    validateL = true;
  }

  return validateL;
}

var promptQuestionU = function () {
  var uppercase = "";
  var validateU = false;

  while (uppercase !== "yes" && uppercase !== "YES" && uppercase !== "no" &&  uppercase !== "NO") {

    uppercase = prompt("Would you like to include uppercase letters in your password?");

    if (uppercase !== "yes" && uppercase !== "YES" && uppercase !== "no" &&  uppercase !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (uppercase === "yes" || uppercase === "YES") {
    validateU = true;
  }
  
  return validateU;
}

var promptQuestionNu = function () {
  var numeric = "";
  var validateNu = false;

  while (numeric !== "yes" && numeric !== "YES" && numeric !== "no" &&  numeric !== "NO") {

    numeric = prompt("Would you like to include numeric characters in your password?");

    if (numeric !== "yes" && numeric !== "YES" && numeric !== "no" &&  numeric !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if (numeric === "yes" || numeric === "YES") {
    validateNu = true;
  }

  return validateNu;
}

var promptQuestionS = function () {
  var special = "";
  var validateS = false;

  while (special !== "yes" && special !== "YES" && special !== "no" &&  special !== "NO") {

    special = prompt("Would you like to include special characters in your password?");

    if (special !== "yes" && special !== "YES" && special !== "no" &&  special !== "NO") {
      window.alert("Invalid input. Answer the question with 'yes' or 'no.'");
    }
  }

  if(special === "yes" || special === "YES") {
    validateS = true;
  }

  return validateS;
}

// generate password 

var generatePassword = function () {

  var numChar = promptQuestionN();

  while (lResult !== true && uResult !== true && nuResult !== true && sResult !== true) {
    var lResult = promptQuestionL();
    var uResult = promptQuestionU();
    var nuResult = promptQuestionNu();
    var sResult = promptQuestionS();

    if (lResult !== true && uResult !== true && nuResult !== true && sResult !== true) {
      window.alert("Invalid inputs! At least one character type needs to be validated!");
    }
  }

  var listOfChars = [];

    // Single //
  
    if (lResult === true) {
      listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                          't', 'u', 'v', 'w', 'x', 'y', 'z'];                      
    } 
  
    if (uResult === true) {
      listOfChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
                          'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
    }
  
    if (nuResult === true) {
      listOfChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    }
  
    if (sResult === true) {
      listOfChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
    }

    // Combo of Two //

    if (lResult === true && uResult === true) {
      listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
  
    if (lResult === true && nuResult === true) {
      listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
    }
  
    if (lResult === true && sResult === true) {
      listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  
    }
  
    if (uResult === true && nuResult === true) {
      listOfChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
    }
  
    if (uResult === true && sResult === true) {
      listOfChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  
    }
  
    if (nuResult === true && sResult === true) {
      listOfChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  
    }

  // Combo of Three //

  if (lResult === true && uResult === true && nuResult === true) {
    listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
   
  }

  if (lResult === true && uResult === true && sResult === true) {
    listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
   
  }

  if (lResult === true && nuResult === true && sResult === true) {
    listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
   
  }

  if (uResult === true && nuResult === true && sResult === true) {
    listOfChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  }

  if (lResult === true && uResult === true && nuResult === true && sResult === true) {
    listOfChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  }

  var randomString = '';
  for(var i = 0; i < numChar; i++) {
    var mathFloor = Math.floor(Math.random() * listOfChars.length);
    randomString += listOfChars[mathFloor];
  }

  return randomString;
}

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
