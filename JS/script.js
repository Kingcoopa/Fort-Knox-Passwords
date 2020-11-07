// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password

function generatePassword (){

      // Values: Numbers, Characters, Upper/Lower case.
          var chars= "ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?:{}|+_)(*&^%$#@!~,./;'[]\`=-";
          var passwordLength = 20;
          var password="";

// create for loop to choose password characters
          for(var i=0; i < passwordLength; i++){
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber,randomNumber+1);
          }

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
