// Assignment code here
var passwordPrompts = function (prompts) {
  prompt[0] = "Password is at least 8 characters.";
  prompt[1] = "Password has a mixture of both uppercase and lowercase letters";
  prompt[2] = "Password has a mixture of letters and numbers";
  prompt[3] = " Password includes at least one special character, e.g., ! @ # ? ]";

  for(i = 0; i < prompt.length; i++) {
    console.log(prompt[i]);
  }
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
