// Get DOM elements
const inputField = document.getElementById("input-field");
const checkBtn = document.getElementById("check-btn");
const outputText = document.getElementById("output-text");

// Check if a given word is a palindrome
function checkWord(e) {
  e.preventDefault();
  let isPalindrome = false;
  // Get the word and convert it to lowercase 
  const word = inputField.value.toLowerCase();
  // If the input is empty dont do anything
  if (!word) return;
  // Reverse the word
  const reversedWord = word.split("").reverse().join("");
  // Check if the word is a palindrome or not
  isPalindrome = word === reversedWord ? true : false;
  // display message to user
  displayMessage(word, isPalindrome);
}

// Display a message to the user
function displayMessage(word, isPalindrome) {
  outputText.style.marginTop = "10px";
  // Set the content and color of the text depending on whether the word is a palindrome or not
  if (isPalindrome) {
    outputText.textContent = `${word} is a palindrome!`; 
    outputText.style.color = "green";
  } else {
    outputText.textContent = `${word} is not a palindrome`;
    outputText.style.color = "red";
  }
}

// Event listener for button click
checkBtn.addEventListener("click", checkWord);