/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.


*/

var plusOneSum = [1, 2, 3, 4]; // 14

plusOneSum.reduce((acc, curr) => acc + (curr+1), 0);


/*

Write a function that accepts a multi dimensional array and returns a flattened version.


*/

var flatten = [1, 2, [3, [4], 5, 6], 7] // [1, 2, 3, 4, 5, 6, 7]

flatten.flat(2)

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

let sort = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1']

var order = function(arr){
  var obj = {};
  obj.length = 0;
  for(var i = 0; i < arr.length; i++){
    var index = arr[i].slice(1);
    if(obj[index]){
      obj[index].push(arr[i]);
    } else {
      obj[index] = [arr[i]];
      obj.length++;
    }
  }

  var newArr = [];
  for(var i = 1; i < obj.length + 1;  i++){
    newArr = newArr.concat(obj[i]);
  }

  return newArr;
}

order(sort)

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/


var firstArray = [1,2,3,4,5,6];
var secondArray = [3,4,6];

var result = firstArray.filter(item=>secondArray.indexOf(item)==-1);

console.log(result);


/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(str) {
  var strSplit = str.split(' ');
  var longestWord = [];;
  var len = 0;
  for(var i in strSplit){
    if(strSplit[i].length == len){
      longestWord.push(strSplit[i]);
     } else if(strSplit[i].length > len) {
        longestWord = [];
        len = strSplit[i].length;
        longestWord.push(strSplit[i])
     }
  }
  return longestWord;
}

longestWords("I gave a present to my parents")

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multiples() {
  var numbers = [];
  for (var i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          numbers.push(i);
      }
  };
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  };

  return sum;
}

multiples()

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('tree traversal'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(num1, num2) {
    if(!isNaN(num1) && !isNaN(num2)){
        return num1 + num2;
    } else {
        return function (num2) {
            return num1 + num2;
        }
    }
}