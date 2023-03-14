function generateDesiredDivisors(userInput, cb) {
  userInput = userInput.split(",");
  num = Number(userInput[0].trim());
  numOfDivisors = Number(userInput[1].trim());
  let arrGenDiv = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arrGenDiv.push(i);
    }
  }
  return cb(num, numOfDivisors, arrGenDiv), num, numOfDivisors;
}

userInput = prompt(
  "Input a number whose positive divisors you want to determine followed by the number of divisors you want, both separated by a comma"
);
generateDesiredDivisors(userInput, (num, numOfDivisors, arrGenDiv) => {
  if (arrGenDiv.length >= numOfDivisors) {
    return alert(
      `The first ${numOfDivisors} divisors of ${num} are ${arrGenDiv.splice(
        0,
        numOfDivisors
      )}`
    );
  } else {
    return alert(`${num} doesn't have up to ${numOfDivisors} divisors,
    try requesting for a lesser number of divisors`);
  }
});

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(0, 3));
