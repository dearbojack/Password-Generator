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

// declare password options as global scope variables
var pwdLength = 0;
var charTypes = 0;

// prompt and input validator 
function getPwdLength() {
  const input = prompt("How long do you want your password to be (10 - 64):");

  if (input >= 10 && input <= 64) {
    // when the input is valid, stop function, return pwdLength;
    console.log('Valid input for pwd length: ' + input);
    return pwdLength = input;
  } else {
    // when the input is invalid, call the func again till we get valid input
    console.log('Invalid input for pwd length: ' + input);
    alert("Invalid input! Please enter a number between 10 - 64.");
    getPwdLength();
  }
}

function getCharTypes() {
  const input = prompt("How many types of charafcters do you want in your password (1 - 4):");

  if (input >= 1 && input <= 4) {
    // when the input is valid, stop function, return charTypes;
    console.log('Valid input for character types: ' + input);
    return charTypes = input;
  } else {
    // when the input is invalid, call the func again till we get valid input
    console.log('Invalid input for character types: ' + input);
    alert("Invalid input! Please enter a number between 1 - 4.");
    getCharTypes();
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  getPwdLength();
  getCharTypes();
}

// Function for getting random elements from an array
function getRandom(arr, count) {
  let result = [];
  let shuffled = arr.slice().sort(() => 0.5 - Math.random());
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i]);
  }
  return result;
}

// Function to generate password with user input
// 1. create an temporary array of user prefered char types
// 2. get a random array of char types (user preferred numbers)
// 3. the array we get is an array of arrays, so need to unwrap and concat them into an array of chars
// 4. get pwdLength number of random chars from the array we get from last step
// tada, that's the pwd we are looking for

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
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  return passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);