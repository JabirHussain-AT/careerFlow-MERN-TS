export function generatePassword(length) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@$*";

  // Ensure at least one character from each character set
  let password = "";
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(uppercaseChars);
  password += getRandomChar(numberChars);
  password += getRandomChar(specialChars);

  // Generate the rest of the password
  for (let i = 4; i < length; i++) {
    const charset = lowercaseChars + uppercaseChars + numberChars + specialChars;
    password += getRandomChar(charset);
  }

  // Shuffle the password characters
  password = shuffleString(password);
  console.log("🚀 ~ file: passGenerator.ts:22 ~ generatePassword ~ password:", password)

  return password;
}

function getRandomChar(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

function shuffleString(str) {
  const shuffledChars = str.split('').sort(() => Math.random() - 0.5).join('');
  return shuffledChars;
}
