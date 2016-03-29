/*
TASK:
Add biggest numbers from each argument array together
*/

function flattened(arr1, arr2) { //puts all elements of all arrays into single array
  return arr1.concat(arr2);
}

function bigToSmall(num1, num2) { //sorts numbers from biggest to smallest
  return num2 - num1;
}

function addNums(num1, num2) { //adds numbers together
  return num1 + num2;
}

function biggestNum(a, b, c) {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]); //adds all argument arrays into one array
  }
  var answer = arr.reduce(flattened).sort(bigToSmall).splice(0, 3).reduce(addNums);
  return answer;
}

var test1 = [ 19, 16, 4, 2];
var test2 = [24, 2, 8, 17];
var test3 = [5, 10, 7, 9];
console.log(biggestNum(test1, test2, test3));
