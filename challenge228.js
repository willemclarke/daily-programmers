const inputs = [
  "billowy",
  "biopsy",
  "chinos",
  "defaced",
  "chintz",
  "sponged",
  "bijoux",
  "fiddle",
  "begins",
  "chimps",
  "wronged"
];

function determineOrder(input) {
  const sort = input
    .split("")
    .sort()
    .join("");
  const reverseSort = input
    .split("")
    .sort()
    .reverse()
    .join("");

  if (sort === input) {
    return input + " IN ORDER";
  } else if (reverseSort === input) {
    return input + " IN REVERSE ORDER";
  } else return input + " NOT IN ORDER";
}

const mappedOutputs = inputs.map(determineOrder);
console.log(mappedOutputs);

// Output
// [ 'billowy IN ORDER',
//   'biopsy IN ORDER',
//   'chinos IN ORDER',
//   'defaced NOT IN ORDER',
//   'chintz IN ORDER',
//   'sponged IN REVERSE ORDER',
//   'bijoux IN ORDER',
//   'fiddle NOT IN ORDER',
//   'begins IN ORDER',
//   'chimps IN ORDER',
//   'wronged IN REVERSE ORDER' ]
