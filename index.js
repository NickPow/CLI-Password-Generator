
const readline = require('readline');
const { generatePassword } = require('./passwordGenerator');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display help message
function displayHelp() {
  console.log(`
    Password Generator CLI
    Usage:
      node index.js --length <length>
    
    Options:
      --length <length>    Specify the length of the password (default is 8).
      --help               Show this help message.
  `);
}


const args = process.argv.slice(2);
let length = 8;

// Flags
if (args.includes('--help')) {
  displayHelp();
  rl.close();
} else {
  
  args.forEach(arg => {
    if (arg.startsWith('--length')) {
      const index = args.indexOf(arg) + 1;
      length = parseInt(args[index], 10);
    }
  });

  // Validation
  if (isNaN(length) || length < 1) {
    console.log('Error: Invalid length. Please enter a positive integer.');
    rl.close();
    return;
  }

  
  const password = generatePassword(length);
  console.log(`Generated Password: ${password}`);
  rl.close();
}
