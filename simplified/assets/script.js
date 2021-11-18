// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols = ["!","#","$","%","&","*","+","-","=",">","?","~"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var lowerLetters = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var allTogether = symbols.concat(numbers, lowerLetters, upperLetters);

// console.log(allTogether); - It worked!!

 // for this function we need to build a string, because it is random letters and #s
 function generatePassword() {
  var genPass = ""
  for (var i = 0; i < 9; i++) {
    var randomValue = allTogether[Math.floor(Math.random() * allTogether.length)]
    genPass += (randomValue, randomValue);
    
  }
  return genPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);