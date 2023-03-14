// function convertWord(word, cb) {
//   let converted = word.toUpperCase();
//   return cb(converted);
// }

// convertWord("Perfection", (word) => {
//   let greet = `Good Morning to you, ${word}`;
//   alert(greet);
// });

function greet(name) {
  //const name = prompt("What is your name?");
  return alert(`Good morning ${name}`);
}

const username = prompt("What is your name?");
greet(username);
