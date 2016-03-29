/*
TASK: Add the 3 biggest numbers from each argument-array.
*/

function flatten(array1, array2) { //Makes one array from values of multiple arrays;
  return array1.concat(array2);
}

function sortNums(num1, num2) { //Sorts numbers in array from largest to smallest
  return num2 - num1;
}

function adder(num1, num2) {//adds two numbers together
  return num1 + num2;
}

function biggestNum(a, b, c) { 
  var nums = [];
  for (var i = 0; i < arguments.length; i++) {
    nums.push(arguments[i]);
  }
  nums = nums.reduce(flatten).sort(sortNums).splice(0,3).reduce(adder);
  return nums;
}

var test1 = [8, 27, 4, 1];
var test2 = [7, 19, 3, 6];
var test3 = [14, 5, 9, 2];

console.log(biggestNum(test1, test2, test3));
