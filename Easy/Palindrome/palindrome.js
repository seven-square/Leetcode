function detPalindrome(word) {
  newWord = word
    .toLowerCase()
    .split(" ")
    .join("")
    .split(/[-_],\s/)
    .reverse("")
    .join("");
  console.log(newWord);
  word = word.split(" ").join("").toLowerCase(); //.split(' ') used with .join('') removes spaces
  if (newWord == word) {
    console.log(`${word} is a Palindrome`);
  } else {
    console.log(`${word} is not a Palindrome`);
  }
}

detPalindrome("nurses run");
detPalindrome("a dog! a panic in a pagoda");
detPalindrome("a man, a plan, a canal - panama");
detPalindrome("able WAS i ere i saw Elba");
detPalindrome("1881");
detPalindrome("rotor");
detPalindrome("02/02/2020");
detPalindrome("DId Hannah see bees? Hannah Did");

//.split(' ') used with .join('') removes spaces
