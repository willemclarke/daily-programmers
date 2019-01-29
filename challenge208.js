const rawInput = "3 1 3 4 4 1 4 5 2 1 4 4 4 4 1 4 3 2 5 5 2 2 2 4 2 4 4 4 4 1"
const input = rawInput.split(' ')

function cull(arr){
  return arr.filter(function(integer, index) {
    return arr.indexOf(integer) >= index;
  })
}
console.log(cull(input))

// Output
// [ '3', '1', '4', '5', '2' ]



