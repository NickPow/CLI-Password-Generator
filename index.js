// Author: Nicholas Power SD 12
// Date: January 23, 2025
// Description: A command-line interface (CLI) password generator that generates a random password based on user input.
// Instructions: Open the terminal and run: "node index.js --help"  to see the available options and usage instructions.

// Importing required modules
const readline = require("readline");
const { generatePassword } = require("./passwordGenerator");

// Creating readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display help message
function displayHelp() {
  console.log(`
    Password Generator
    Usage:
      node index.js --length <length> [--numbers] [--uppercase] [--symbols]
    
    Options:
      --length <length>    Specify the length of the password (default is 8).
      --numbers            Include numbers in the password.
      --uppercase          Include uppercase letters in the password.
      --symbols            Include symbols in the password.
      --help               Show this help message.
  `);
}

// Parsing command-line arguments
const args = process.argv.slice(2);
let length = 8;
let includeNumbers = false;
let includeUppercase = false;
let includeSymbols = false;

// Check if --help flag is present
if (args.includes("--help")) {
  displayHelp();
  rl.close();
} else {
  // Setting up other flags
  args.forEach((arg) => {
    if (arg.startsWith("--length")) {
      const index = args.indexOf(arg) + 1;
      length = parseInt(args[index], 10);
    } else if (arg === "--numbers") {
      includeNumbers = true;
    } else if (arg === "--uppercase") {
      includeUppercase = true;
    } else if (arg === "--symbols") {
      includeSymbols = true;
    }
  });

  // Validation for password length
  if (isNaN(length) || length < 1) {
    console.log("Error: Invalid length. Please enter a positive integer.");
    rl.close();
    return;
  }

  // Generating password
  const password = generatePassword(
    length,
    includeNumbers,
    includeUppercase,
    includeSymbols
  );
  console.log(`Generated Password: ${password}`);
  rl.close();
}
