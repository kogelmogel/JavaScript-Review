var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last(){
  alert(threeItems.pop());
}

last();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
evenArray = evenArray.filter(word => word % 2 === 0);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
  for (i=0; i< randomArray.length; i++) {
    if(randomArray.includes(getRandomArbitrary())){
      alert('true')}
    else {
      alert('false')}
  }

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
second = [...first, 6, 7]


alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
  function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = "";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord.length){
    longestWord = strSplit[i];
       }
    }
    return longestWord;
  }
  findLongestWord(sentence);
  


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

function uppercase(str)
{
 let sentence = str.split(' ');
 let newarray1 = [];

 for(let i = 0; i < sentence.length; i++){
     newarray1.push(sentence[i].charAt(0).toUpperCase()+sentence[i].slice(1));
 }
 return newarray1.join(' ');
}

uppercase(myPoem)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function getVowels(str) {
  var vowelsCount = 0;

  var string = str.toString();

  for (var i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

getVowels(theOdyssey);