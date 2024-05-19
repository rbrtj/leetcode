function validPalindrome(s: string) {
  const filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const letters = filteredString.split("");
  let isValid = true;
  for (let i = 0; i < letters.length; i++) {
    let pointer = letters.length - 1 - i;
    if (letters[i] !== letters[pointer]) {
      isValid = false;
    }
  }
  return isValid;
}

validPalindrome("A man, a plan, a canal: Panama");
