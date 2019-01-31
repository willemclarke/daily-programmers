function perfectlyBalanced(str) {
  if (str.split("x").length === str.split("y").length) {
    return true;
    } else {
    return false;
    }
}
const input = "xxxyyyzzz";
const inputOne = "yyyxxx";
const inputTwo = "xxxyyyy";
const inputThree = "yyxyxxyxxyyyyxxxyxyx";
const inputFour = "xxyxxxxyyyxyxxyxxyy";
const inputFive = "";
const inputSix = "x";

console.log(perfectlyBalanced(input)); // outputs true
console.log(perfectlyBalanced(inputOne)); // outputs true
console.log(perfectlyBalanced(inputTwo)); // outputs false
console.log(perfectlyBalanced(inputThree)); // outputs true
console.log(perfectlyBalanced(inputFour)); // outputs false
console.log(perfectlyBalanced(inputFive)); // outputs true
console.log(perfectlyBalanced(inputSix)); // outputs false












