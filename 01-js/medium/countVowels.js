/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // let vowelObject = {
  //   "a" : 0,
  //   "e" : 0,
  //   "i" : 0,
  //   "o" : 0,
  //   "u" : 0
  // };
  // str.split("").forEach(element => {
  //   let char = element.toLowerCase();
  //   if (char in vowelObject){
  //     vowelObject[char]++;
  //   }
  // });
  // return vowelObject;
  let count = 0;
  str.split("").forEach(char => {
    if (["a", "e", "i", "o", "u"].includes(char.toLowerCase())){
      count++;
    }
  });
  return count;
}

console.log(countVowels("hello"));

module.exports = countVowels;