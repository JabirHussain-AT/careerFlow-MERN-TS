export function generatePassword(length) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-=_+[]{}|;:'\",.<>/?";

  const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
  const getRandomchar = (charset) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  let password = "";

  for (let i = 0; i < length; i++) {
    password += getRandomchar(allChars);
  }

  return password;
}
