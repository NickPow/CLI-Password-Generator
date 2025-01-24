CLI Password Generator

A command-Line Interface (CLI) application in Node.js that generates passwords for users based on arguments they provide via flags.

Features:
* Generate a password with a specified length.
* Optionally include numbers, uppercase letters, and symbols.
* Defaults to an 8-character password with lowercase letters if no options are provided.
* Displays a help message for guidance.

Usage:

Run the application using the following command:

node index.js [options]

Options:
* --length <n>: Set the length of the password (default is 8).
* --numbers: Include numbers in the password.
* --uppercase: Include uppercase letters in the password.
* --symbols: Include symbols in the password.
* --help: Display a help message.

Examples:
* Generate a default password:
   
  node index.js 
  
* Generate a 12-character password with numbers:
   
  node index.js --length 12 --numbers 
  
* Generate a password with uppercase letters and symbols:
   
  node index.js --length 10 --uppercase --symbols 
  
* Display the help message:
   
  node index.js --help 


Setup:
* Clone the repository:

     git clone https://github.com/NickPow/CLI-Password-Generator.git

Author: Nicholas Power

GitHub: NickPow
