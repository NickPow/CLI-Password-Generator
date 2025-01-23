
// Function to generate password
function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lowercase.length);
      password += lowercase[randomIndex];
    }
  
    return password;
  }
  
  module.exports = { generatePassword };
  