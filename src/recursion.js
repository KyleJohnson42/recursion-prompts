/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    if (Array.isArray(array[0])) {
      return arraySum(array[0]);
    } else {
      return array[0];
    }
  } else {
    if (Array.isArray(array[0])) {
      return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
      return array[0] + arraySum(array.slice(1));
    }
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  let test = Math.abs(n);

  if (test === 0) {
    return true;
  } else if (test === 1) {
    return false;
  } else {
    return isEven(test - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else {
    if (n > 0) {
      return n - 1 + sumBelow(n - 1);
    } else {
      return n + 1 + sumBelow(n + 1);
    }
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x - y <= 1 && x - y >= -1) {
    return [];
  } else {
    let result = [];
    if (x > y) {
      result.push(x - 1);
      result = result.concat(range(x - 1 , y));
    } else {
      result.push(x + 1);
      result = result.concat(range(x + 1 , y));
    }
    return result;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp === -1) {
    return 1 / base;
  } else {
    if (exp > 0) {
      return base * base * exponent(base, exp - 2);
    } else {
      return (1 / (base * base)) * exponent(base, exp + 2).toFixed(5);
    }
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n % 2 !== 0 || n <= 0) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  } else if (string.length === 1) {
    return string;
  } else {
    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  let testStr = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      testStr += string[i];
    }
  }

  testStr = testStr.toLowerCase();

  if (testStr.length === 0 || testStr.length === 1) {
    return true;
  } else if (testStr[0] !== testStr[testStr.length - 1]) {
    return false;
  } else {
    return palindrome(testStr.substring(1, testStr.length - 1));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === y || x === -y || x === 0) {
    return 0;
  } else {
    if (x > 0 && y > 0) {
      if (x < y) {
        return x;
      } else if (x - y < y) {
        return x - y;
      } else {
        return modulo(x - y, y);
      }
    } else if (x < 0 && y < 0) {
      if (-x < -y) {
        return x;
      } else if (-x + y < -y) {
        return -(-x + y);
      } else {
        return modulo(-x + y, -y);
      }
    } else if (x < 0 && y > 0) {
      if (-x < y) {
        return x;
      } else if (-x - y < y) {
        return -x - y;
      } else {
        return modulo(-x +-y, -y);
      }
    } else if (x > 0 && y < 0) {
      if (x < -y) {
        return x;
      } else if (x + y < -y) {
        return x + y;
      } else {
        return modulo(x + y, -y);
      }
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (x === 1) {
    return y;
  } else if (y === 1) {
    return x;
  } else if (x === -1) {
    return -y;
  } else if (y === -1) {
    return -x;
  } else {
    if (x > 0 && y > 0) {
      return x + multiply(x, y - 1);
    } else if (x < 0 && y < 0) {
      return -x + multiply(-x, -y - 1);
    } else if (x < 0 && y > 0) {
      return -(-x + multiply(-x, y - 1));
    } else if (x > 0 && y < 0) {
      return -(x + multiply(x, -y - 1));
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  } else {
    if (x > 0 && y > 0) {
      if (x < y) {
        return 0;
      } else {
        return 1 + divide(x - y, y);
      }
    } else if (x < 0 && y < 0) {
      if (-x < -y) {
        return 0;
      } else {
        return 1 + divide(-x + y, -y);
      }
    } else if (x < 0 && y > 0) {
      if (-x < y) {
        return 0;
      } else {
        return -1 - divide(-x - y, y);
      }
    } else if (x > 0 && y < 0) {
      if (x < -y) {
        return 0;
      } else {
        return -1 - divide(x + y, -y);
      }
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x <= 0 || y <= 0) {
    return null;
  } else {
    let max = Math.max(x, y);
    let min = Math.min(x, y);
    if (max % min === 0) {
      return min;
    } else {
      return gcd(min, max % min);
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  } else if (str1 === '' && str2 === '') {
    return true;
  } else {
    return compareStr(str1.substring(1, str1.length), str2.substring(1, str2.length));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str === '') {
    return [];
  } else {
    let result = [str[0]];
    result = result.concat(createArray(str.substring(1)));
    return result;
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let result = [];
    result.push(array[array.length - 1]);
    console.log(result);
    result = result.concat(reverseArr(array.slice(0, array.length - 1)));
    return result;
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let result = [];
  if (length <= 0) {
    return result;
  } else {
    result.push(value);
    result = result.concat(buildList(value, length - 1));
    return result;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let result = [];
  if (n <= 0) {
    return result;
  } else {
    result = result.concat(fizzBuzz(n - 1));
    if (n % 3 === 0 && n % 5 === 0) {
      result.push('FizzBuzz');
    } else if (n % 3 === 0) {
      result.push('Fizz');
    } else if (n % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(n.toString());
    }
    return result;
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else {
    if (array[0] === value) {
      return 1 + countOccurrence(array.slice(1), value);
    } else {
      return countOccurrence(array.slice(1), value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    let result = [];
    result.push(callback(array[0]));
    result = result.concat(rMap(array.slice(1), callback));
    return result;
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let total = 0;

  for (const prop in obj) {
    if (prop === key) {
      total++;
    }
    if (typeof obj[prop] === 'object') {
      total += countKeysInObj(obj[prop], key);
    }
  }

  return total;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let total = 0;

  for (const prop in obj) {
    if (obj[prop] === value) {
      total++;
    }
    if (typeof obj[prop] === 'object') {
      total += countValuesInObj(obj[prop], value);
    }
  }

  return total;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], oldKey, newKey);
    }
    if (prop === oldKey) {
      obj[newKey] = obj[prop];
      delete obj[oldKey];
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0, 1];
  } else {
    let nextArr = [];
    let fib = fibonacci(n - 1);
    nextArr.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib.concat(nextArr);
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let result = [];
    result.push(array[0].toUpperCase());
    result = result.concat(capitalizeWords(array.slice(1)));
    return result;
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let result = [];
    result.push(array[0][0].toUpperCase() + array[0].substring(1).toLowerCase());
    result = result.concat(capitalizeFirst(array.slice(1)));
    return result;
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let total = 0;

  for (const prop in obj) {
    if (obj[prop] % 2 === 0) {
      total += obj[prop];
    }
    if (typeof obj[prop] === 'object') {
      total += nestedEvenSum(obj[prop]);
    }
  }

  return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      result = result.concat(flatten(array[i]));
    }
  }

  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }

  if (str.length ===0) {
    return obj;
  } else {
    if (!obj.hasOwnProperty(str[0])) {
      obj[str[0]] = 1;
    } else {
      obj[str[0]]++;
    }
    if (str.length === 1) {
      return obj;
    } else {
      let restOfWord = letterTally(str.substring(1), obj);
    }
  }

  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  let result = [];

  if (list.length === 0) {
    return [];
  } else if (list.length === 1) {
    return list;
  } else {
    let repeat = false;
    let i = 0;
    while (true) {
      if (!repeat) {
        result.push(list[i]);
      } else {
        if (list[i] !== list[i - 1] || i >= list.length - 1) {
          break;
        }
      }
      i++;
      if (list[i] === list[i - 1] || i === list.length) {
        repeat = true;
      }
    }
    let nextArr = compress(list.slice(i));
    if (nextArr[0] !== result[result.length - 1]) {
      result = result.concat(nextArr);
    }
    return result;
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  } else {
    let result = [];
    let entry = array[0];
    entry.push(aug);
    result.push(entry);
    result = result.concat(augmentElements(array.slice(1), aug));
    return result;
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let result = [];

  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return array;
  } else {
    let repeat = false;
    let i = 0;
    while (true) {
      if (!repeat) {
        result.push(array[i]);
      } else {
        if (array[i] !== array[i - 1] || i >= array.length - 1) {
          break;
        }
      }
      i++;
      if ((array[i] === array[i - 1] && array[i] === 0) || i === array.length) {
        repeat = true;
      }
    }
    let nextArr = minimizeZeroes(array.slice(i));
    if (nextArr[0] !== result[result.length - 1]) {
      result = result.concat(nextArr);
    }
    return result;
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    array[0] = Math.abs(array[0]);
    return array;
  } else {
    let result = [];
    result.push(Math.abs(array[0]), -1 * Math.abs(array[1]));
    result = result.concat(alternateSign(array.slice(2)));
    return result;
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  if (str.length === 0) {
    return '';
  } else {
    let result = '';
    if (nums.hasOwnProperty(parseInt(str[0]))) {
      result += nums[parseInt(str[0])];
    } else {
      result += str[0];
    }
    result += numToText(str.substring(1));
    return result;
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  let total = 0;
  if (node === undefined) {
    node = document;
  }

  for (let i = 0; i < node.children.length; i++) {
    if (node.children[i].tagName === tag.toUpperCase()) {
      total++;
    }
    if (node.children[i].children.length !== 0) {
      total += tagCount(tag, node.children[i]);
    }
  }

  return total;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = array.length;
  }

  let indexGuess = Math.floor((min + max) / 2);
  if (array[indexGuess] === target) {
    return indexGuess;
  } else if (array.length === 0 || array.length === 1 && array[0] !== target) {
    return null;
  } else if (array[indexGuess] < target) {
    let copy = array.slice(indexGuess);
    if (binarySearch(copy, target) === null) {
      return null;
    }
    return indexGuess + binarySearch(copy, target);
  } else if (array[indexGuess] > target) {
    let copy = array.slice(0, indexGuess);
    return binarySearch(copy, target);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  let midpoint = Math.floor(array.length / 2);

  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint);

  if (left.length === 1 && right.length === 1) {
    if (left[0] <= right[0]) {
      return left.concat(right);
    } else {
      return right.concat(left);
    }
  } else if (left.length === 0) {
    return right;
  } else if (right.length === 0) {
    return left;
  } else {
    left = mergeSort(left);
    right = mergeSort(right);
    let result = [];
    let l = 0;
    let r = 0;
    for (let k = 0; k < left.length + right.length; k++) {
      if (right[r] === undefined || left[l] <= right[r]) {
        result[k] = left[l];
        l++;
      } else if (left[l] === undefined || right[r] < left[l]) {
        result[k] = right[r];
        r++;
      }
    }
    return result;
  }
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var result = [];
  } else {
    var result = {};
  }

  for (const prop in input) {
    if (typeof input[prop] !== 'object') {
      result[prop] = input[prop];
    } else {
      result[prop] = clone(input[prop]);
    }
  }

  return result;
};
