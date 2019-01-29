const toDoList = [];

function addItem(item) { 
  return toDoList.push(item)
};

//input
const additemOne = addItem('Take a shower');
const additemTwo = addItem('Go to work');


function findDeleteItem(item) {
  if (toDoList.find(word => word === item)) {
    return toDoList.splice(toDoList.indexOf(item), 1)
  }
};

//further input
const additemThree = addItem('Buy a new phone');
const deleteItemOne = findDeleteItem('Go to work');

console.log(toDoList);

// Output:
// [ 'Take a shower', 'Buy a new phone' ]







