// 1. Write a JavaScript function that reverse a number. Example x = 32243;
// Expected Output : 34223
function reverse(num) {
    let reversedNum = 0;
    while (num > 0) {
      reversedNum = (reversedNum * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversedNum;
}

console.log(reverse(32243))
  
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function Palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(Palindrome("madam"))
  
// 3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function combine(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j));
      }
    } 
    return result;
}
console.log(combine("dog"))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(str) {
    let charArray = str.split('');
    charArray.sort();
    let sortedStr = charArray.join('');
    return sortedStr;
}
console.log(sortString("abeemrstw"))
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let firstLetter = words[i][0].toUpperCase();
      let restOfWord = words[i].slice(1);
      words[i] = firstLetter + restOfWord;
    }
    return words.join(' ');
}
console.log(capitalizeWords("the quick brown fox"))


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    return longestWord;
}
console.log(findLongestWord("Development"))


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
}
console.log(countVowels("the quick brown fox")) 

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
console.log(isPrime(3))  

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(arg) {
    return typeof arg;
}  
console.log(getType(42))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0;
      }
    }
    return matrix;
}
console.log(identityMatrix(4))
  

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function findSecond(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    var secondLowest = arr[1];
    var secondGreatest = arr[arr.length - 2];
    return [secondLowest, secondGreatest];
}
console.log(findSecond([1,2,3,4,5]))
//           _________________________________________________________________________________________
// Antra Inc. 21355 Ridgetop Circle Suite 300 Dulles VA 20166
// Phone: 703.994.4545 Fax: 703.373.2975 e-mail:hr@antra.net website: www.antra.net
//   12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to halfthesumofallitspositivedivisors:(1+2+3+6)/2=6.Thenextperfectnumberis28=1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function perfectNumber(num) {
    let sum = 0;
    for (var i = 1; i <= num/2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num && num !== 0) {
      return true;
    } else {
      return false;
    }
}
console.log(perfectNumber(6))

// 13. Write a JavaScript function to compute the factors of a positive integer.
function getFactors(num) {
    factors = [];
    for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
}
console.log(getFactors(4))

// 14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountCoins(amount, coins) {
  var result = [];
  for (var i = 0; i < coins.length; i++) {
    var coin = coins[i];
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}
console.log(amountCoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function computeValue(b, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
      result *= b;
    }
    return result;
}
console.log(computeValue(2,4))
  
// 16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUnique(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (result.indexOf(char) === -1) {
        result += char;
      }
    }
    return result;
}
console.log(extractUnique("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function getOccurrences(str) {
    var count = {};
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    return count;
}
console.log(getOccurrences("sdfasfsdf"))

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, value) {
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;
  
    while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = arr[currentIndex];
      if (currentElement < value) {
        minIndex = currentIndex + 1;
      } else if (currentElement > value) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }
  
    return -1;
}

console.log(binarySearch([1,2,3,4],2))

// 19. Write a JavaScript function that returns array elements larger than a number.
function getElementsLarger(arr, num) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (element > num) {
        result.push(element);
      }
    }
    return result;
}
console.log(getElementsLarger([1,4,1,3],1))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomId(length, characters) {
    var result = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
}
console.log(generateRandomId(3,"dasdsadassad"))
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function getSubsets(arr, length) {
    var subsets = [];
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (length === 1) {
        subsets.push([element]);
      } else {
        var remaining = arr.slice(i + 1);
        var subsubsets = getSubsets(remaining, length - 1);
        for (var j = 0; j < subsubsets.length; j++) {
          subsets.push([element].concat(subsubsets[j]));
        }
      }
    }
    return subsets;
}
console.log(getSubsets([1,2,3],2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3

function countOccurrences(str, letter) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char === letter) {
        count++;
      }
    }
    return count;
}
console.log(countOccurrences("microsoft.com", "o"))

// 23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec'
// Expected output : 'e'

function findNotRepeat(str) {
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
        return char;
      }
    }
    return null;
}
console.log(findNotRepeat("asdasfafq"))
// 24. Write a JavaScript function to apply Bubble Sort algorithm.
//  Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
      for (var j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function getLongestCountryName(countryNames) {
    var longestName = "";
    for (var i = 0; i < countryNames.length; i++) {
      var name = countryNames[i];
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
    return longestName;
}

console.log(getLongestCountryName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findLongestSubstring(str) {
    var longestSubstring = "";
    var currentSubstring = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      var charIndex = currentSubstring.indexOf(char);
      if (charIndex === -1) {
        currentSubstring += char;
        if (currentSubstring.length > longestSubstring.length) {
          longestSubstring = currentSubstring;
        }
      } else {
        currentSubstring = currentSubstring.slice(charIndex + 1) + char;
      }
    }
    return longestSubstring;
}
  
console.log(findLongestSubstring("dafasfqeqwe"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
function longestPalindrome(str) {
    var longest = "";
    for (var i = 0; i < str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        var substring = str.substring(i, j);
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
    return longest;
}
console.log(longestPalindrome("dafqwewqewe"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFunction(num1, num2, operation) {
    return operation(num1, num2);
}
  
function add(num1, num2) {
    return num1 + num2;
}
var result = passFunction(5, 3, add); 
console.log(result); 

// 29. Write a JavaScript function to get the function name.

function getFunctionName(func) {
    return func.name;
}
function add(num1, num2) {
    return num1 + num2;
}
  
var name = getFunctionName(add);
console.log(name); 
  