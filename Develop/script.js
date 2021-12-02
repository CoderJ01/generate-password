var promptQuestionN = function () {
  var numChars = "";
  
  while (numChars < 8 || numChars > 128) {
    numChars = prompt("Enter the number of characters (8 - 128) you would like your password to have");

    if (numChars < 8 || numChars > 128) {
      window.alert("Invalid input. The number of characters need to be between 8 and 128");
    }
  }

  console.log(numChars);

  return numChars;
  
  // for (var i = 0; i < numChars; i++) {
  //   var randomNum = listOfChars[Math.floor(Math.random() * 5)];
  // }
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

  console.log(special);

  if(special === "yes" || special === "YES") {
    validateS = true;
  }

  console.log(validateS);

  return validateS;
}

var selectedOrNot = function () {
  var nResult = promptQuestionN();
  var listOfChars = [];

  while (lResult !== true && uResult !== true && nuResult !== true && sResult !== true) {
    var lResult = promptQuestionL();
    var uResult = promptQuestionU();
    var nuResult = promptQuestionNu();
    var sResult = promptQuestionS();

    if (lResult !== true && uResult !== true && nuResult !== true && sResult !== true) {
      window.alert("Invalid inputs! At least one character type needs to be validated!");
    }
  }
  
  if (lResult === true) {
    listOfChars.push = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  if (uResult === true) {
    listOfChars.push = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
                        'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  }

  if (nuResult === true) {
    listOfChars.push = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  }

  if (sResult === true) {
    listOfChars.push = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  }

  console.log("nResult: " + nResult);
  console.log("lResult: " + lResult);
  console.log("uResult: " + uResult);
  console.log("nuResult: " + nuResult);
  console.log("sResult: " + sResult);
  console.log(listOfChars);

}

selectedOrNot();





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
