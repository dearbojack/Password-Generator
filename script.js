// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// * functions to get random elements of the array



// prompt and input validator 
var pwdLength = 0;
var charTypes = 0;

function getPwdLength() {
  const input = prompt("How long do you want your password to be (10 - 64):");

  if (input >= 10 && input <= 64) {
    // The input is valid
    console.log('Valid input');
    return pwdLength = input;
  } else {
    // The input is invalid
    console.log('Invalid input');
    alert("Invalid input! Please enter a number between 10 - 64.");
    getPwdLength();
  }
}



function getCharTypes() {
  const input = prompt("How many types of charafcters do you want in your password (1 - 4):");

  if (input >= 1 && input <= 4) {
    // The input is valid
    console.log('Valid input');
    return charTypes = input;
  } else {
    // The input is invalid
    console.log('Invalid input');
    alert("Invalid input! Please enter a number between 1 - 4.");
    getCharTypes();
  }
}



// console.log(pwdLength);
// console.log(charTypes);

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr, count) {
  let result = [];
  let shuffled = arr.slice().sort(() => 0.5 - Math.random());
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i]);
  }
  return result;
}

// test getRandom function
// console.log(getRandom(specialCharacters, pwdLength))

// Function to generate password with user input
function generatePassword() {
  var characters = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
  var charArrayPool = getRandom(characters, charTypes);
  var charPool = [];
  // console.log(charArrayPool);
  for (let i = 0; i < charArrayPool.length; i++) {
    charPool = [...charPool, ...charArrayPool[i]]
  }
  // console.log(charPool);
  var pwd = getRandom(charPool, pwdLength);
  // console.log(pwd.join(''));
  return pwd.join('');
}

// generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var pwdLength = getPwdLength();
  var charTypes = getCharTypes();

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  return passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);