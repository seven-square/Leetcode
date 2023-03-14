function lengthOfLastWord(s) {
  let count = 0;
  let lastIndex = s.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    if (s[i].toUpperCase() !== s[i].toLowerCase()) {
      count++;
    } else if (count > 0) {
      break;
    }
  }
  return count;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("    fly  to the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("Hello"));
