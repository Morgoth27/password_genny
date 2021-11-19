// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbols = ["!","#","$","%","&","*","+","-","=",">","?","~"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var lowerLetters = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var allTogether = symbols.concat(numbers, lowerLetters, upperLetters);

// console.log(allTogether); - It worked!!
function askPasswordCriteria () {
  var length = parseInt(
    prompt('How long would you like your password to be?')
  )

  if(length<8 || length>128) { 
    alert('Password length must be between 8 and 128 characters'),
    then (location.reload())
  }

  var containSymbols = confirm(
    'Click OK to have symbols in your password'
  )

  var containNumbers = confirm(
    'Click OK to have numbers in your password'
  )

  var containLowercase = confirm(
    'Click OK to have lowercase characters in your password'
  )

  var containUppercase = confirm(
    'Click OK to have uppercase characters in your password'
  )

  if(containLowercase === false && containUppercase===false && containSymbols===false && containNumbers===false) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordCriteria ={
    length: length,
    containSymbols: containSymbols,
    containNumbers: containNumbers,
    containLowercase: containLowercase,
    containUppercase: containUppercase
  }
  console.log(passwordCriteria)
  return passwordCriteria;

}


function randomCharacter (arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  var randomLetter =arr[randomNum]

  return randomLetter
}

 // for this function we need to build a string, because it is random letters and #s
 function generatePassword() {
  var options = askPasswordCriteria();
  var genPass = []

  var characterChoices = [];
  var guaranteedChoices = [];

  if(options.containLowercase) {
    characterChoices = characterChoices.concat(lowerLetters);
    guaranteedChoices.push(randomCharacter(lowerLetters))
  }

  if(options.containUppercase) {
    characterChoices = characterChoices.concat(upperLetters);
    guaranteedChoices.push(randomCharacter(upperLetters))
  }

  if(options.containSymbols) {
    characterChoices = characterChoices.concat(symbols);
    guaranteedChoices.push(randomCharacter(symbols))
  }

  if(options.containNumbers) {
    characterChoices = characterChoices.concat(numbers);
    guaranteedChoices.push(randomCharacter(numbers))
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = randomCharacter(characterChoices)
    genPass.push(possibleCharacter)    
  }

  for (var i=0; i<guaranteedChoices.length; i++) {
    genPass[i] = guaranteedChoices[i];
    
  }
  return genPass.join('');

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);