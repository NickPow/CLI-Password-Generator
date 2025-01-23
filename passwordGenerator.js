// Function to generate password
function generatePassword(length, includeNumbers) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
  
    let characters = lowercase;
  
    if (includeNumbers) characters += numbers;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  module.exports = { generatePassword };
  