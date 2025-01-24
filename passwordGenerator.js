// Function to generate password
function generatePassword(
  length,
  includeNumbers,
  includeUppercase,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = lowercase;
  if (includeNumbers) characters += numbers;
  if (includeUppercase) characters += uppercase;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

module.exports = { generatePassword };
