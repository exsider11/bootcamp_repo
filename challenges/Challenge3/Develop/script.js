// Assignment Code
var generateBtn = document.querySelector("#generate");

//implememnt a getPassword() function that returns an random password meeting the other requirments
//implement logic that genereates random password here
//1.create list of valid letters
  var letters=['a', 'b', 'c', 'd'];
//2.randomly choose from list of letters
  function getRandomNumber(max){
     var randNumber = Math.random() * (max+1); // Math.random creates a random number bewteen 0-1
     return Math.floor(randNumber); //  Math.floor removes decimal points
  }

  function getRandElementFromArray(array){
  var randomPosition=getRandomNumber(letters.length-1);
  return array[randomPosition];
  }

function generatePassword() {
  var password = "";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
