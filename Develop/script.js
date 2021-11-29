// Assignment code here
//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
//https://stackoverflow.com/questions/57984670/how-do-i-display-a-list-when-button-is-clicked-in-javascript

// Method 1 Reference //

function promptsDisplay () {
   var prompts = ["Password is at least 8 characters.", 
  "Password has a mixture of both uppercase and lowercase letters", 
  "Password has a mixture of letters and numbers", 
  "Password includes at least one special character, e.g., ! @ # ? ]"]

  for(var i = 0; i < prompts.length; i++) {
    console.log(prompts[i]);
  }

  document.getElementById("generate").addEventListener("click", function () {
    document.getElementById("password").innerHTML= prompts.join(" ");
  });
}

promptsDisplay();

// document.getElementById("generate").addEventListener("click", function () {
//   document.getElementById("password").innerHTML= "testing";
// });

// Method 2 Reference //

// function showPrompts() {
//   var promptList = new Array("Password is at least 8 characters.", 
//   "Password has a mixture of both uppercase and lowercase letters", 
//   "Password has a mixture of letters and numbers", 
//   "Password includes at least one special character, e.g., ! @ # ? ]");
//   promptList.sort();

//   document.getElementById("password").innerHTML = promptList.join(" ");
// }

// showPrompts();



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
