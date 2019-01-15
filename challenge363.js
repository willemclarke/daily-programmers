const fs = require("fs");
const words = fs.readFileSync("words.txt").toString('utf-8');
const arrayOfWords = words.split("\n");
const formattedArrayOfWords = arrayOfWords.map((word) => {
  return word.replace('\r', "");
});

function check(word) {
  if (word.includes('cie') || (word.includes('ei') 
    && !word.includes('cei'))) {
      return false;
  } else {
    return true;
  }
};

const checkedWords = formattedArrayOfWords.map(word => {
  return check(word);
}); 
const exceptions = checkedWords.filter(word => {
  return word === false;
});
const result = exceptions.length;

console.log(result);
