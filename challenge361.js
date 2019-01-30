const rawInput = "EbAAdbBEaBaaBBdAccbeebaec";
const splitInput = rawInput.split('');

function scoring(character) {
	if (character === character.toLowerCase()) {
	  return 1
	} else if (character === character.toUpperCase()) {
			return -1
	} else {
			return console.log('Scoring Error')
	}
};

// Separated Letters from A-E
const separatedA = splitInput.filter((character) => {
	return character === 'a' || character === 'A'
});
const separatedB = splitInput.filter((character) => {
	return character === 'b' || character === 'B'
});
const separatedC = splitInput.filter((character) => {
	return character === 'c' || character === 'C'
});
const separatedD = splitInput.filter((character) => {
	return character === 'd' || character === 'D'
});
const separatedE = splitInput.filter((character) => {
	return character === 'e' || character === 'E'
});

// Following 3 Lines = Scoring for A:
const scoreA = separatedA.map(scoring);
const totalA = scoreA.reduce((a, b) => a + b, 0);
const printedA = console.log('a:' + totalA);

// Following 3 Lines = Scoring for B:
const scoreB = separatedB.map(scoring);
const totalB = scoreB.reduce((a, b) => a + b, 0);
const printedB = console.log('b:' + totalB);

// Following 3 Lines = Scoring for C:
const scoreC = separatedC.map(scoring);
const totalC = scoreC.reduce((a, b) => a + b, 0);
const printedC = console.log('c:' + totalC);

// Following 3 Lines = Scoring for D:
const scoreD = separatedD.map(scoring);
const totalD = scoreD.reduce((a, b) => a + b, 0);
const printedD = console.log('d:' + totalD);

// Following 3 Lines = Scoring for E:
const scoreE = separatedE.map(scoring);
const totalE = scoreE.reduce((a, b) => a + b, 0);
const printedE = console.log('e:' + totalE);

// Output:
// a:1
// b:0
// c:3
// d:2
// e:1


