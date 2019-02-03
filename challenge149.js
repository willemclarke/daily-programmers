const input = 'did you hear about the excellent farmer who was outstanding in his field'.split('');
const charactersToRemove = [' ', 'a', 'e', 'i', 'o', 'u'];

function removedSpacesVowels(character) {
  if (charactersToRemove.includes(character)) {
    return false;
  } else {
    return true;
  }
};

function maintainVowels(character) {
  if (character === ' ' || !charactersToRemove.includes(character)) {
    return false;
  } else {
    return true;
  }
};

const removedCharactersAndSpaces = input.filter(removedSpacesVowels);
const answer = removedCharactersAndSpaces.join('');
const printedVowels = input.filter(maintainVowels);
const answerVowel = printedVowels.join('');
console.log(answer);
console.log(answerVowel);

// Output:
// ddyhrbtthxcllntfrmrwhwststndngnhsfld
// ioueaaoueeeeaeoaouaiiiie


// Another way to solve problem - bass's solutions
// const charactersToRemove = [' ', 'a', 'e', 'i', 'o', 'u']
// const answer = 'all those who believe in psychokinesis raise my hand'.split('')
//   .filter(character => !charactersToRemove.includes(character))
//   .join('')
// console.log(answer);

