//ransome - 'bba'
//magazine- 'aab'

function canConstruct(ransomeNote, magazine) {
  let total = 0;
  ransomeNote = ransomeNote.split("");
  magazine = magazine.split("");
  for (let i = 0; i < ransomeNote.length; i++) {
    if (magazine.includes(ransomeNote[i])) {
      magazine.splice(magazine.indexOf(ransomeNote[i]), 1);
      // console.log(magazine);
      total++;
    }
  }
  if (total == ransomeNote.length) return true;

  return false;
}

let result = canConstruct("aabes", "baabestine");
let result1 = canConstruct("junk", "baabestine");
console.log(result);
console.log(result1);
