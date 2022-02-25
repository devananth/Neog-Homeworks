const arr = [1, 2, 3, 4, 5, 6, 20];

const strArr = ["apple", "orange", "mango", "papaya", "n"];

/* Problems related to Array of Integers*/
console.log("******* Problems related to Array of Integers ********\n");

//sum of all odd numbers
const sumOfOddNumbers = (accumulator, currentVal) =>
  currentVal % 2 !== 0 ? accumulator + currentVal : accumulator;
console.log("Sum of ODD Elements : ", arr.reduce(sumOfOddNumbers, 0));

/* ------------------------------------------------ */

//sum of all odd indices numbers
const sumOfOddIndices = (accumulator, currentVal, currentIndex) =>
  currentIndex % 2 !== 0 ? accumulator + currentVal : accumulator;
console.log("Sum of ODD Indicies : ", arr.reduce(sumOfOddIndices, 0));

/* ------------------------------------------------ */

//Biggest number in the array
const maxValueOfArray = (maxValue, currentVal) =>
  maxValue < currentVal ? currentVal : maxValue;
console.log("Max Value of the array : ", arr.reduce(maxValueOfArray));

/* ------------------------------------------------ */

//Numbers divisible by 10
const numbersDivisibleBy10 = (num) => num % 10 === 0;
console.log("Numbers Divisible by 10 : ", arr.filter(numbersDivisibleBy10));

/* ------------------------------------------------ */

//Increase Odd by 1 & Decrease Even by 1
const increaseOddDecreaseEven = (num) => (num % 2 !== 0 ? num + 1 : num - 1);
console.log(
  "Increase Odd & Decrease Even : ",
  arr.map(increaseOddDecreaseEven)
);

/* ------------------------------------------------ */

//return Object with sum of odd & even
const sumOfOddEvenObj = (oddEvenObj, currentVal) =>
  currentVal % 2 !== 0
    ? { ...oddEvenObj, odd: oddEvenObj.odd + currentVal }
    : { ...oddEvenObj, even: oddEvenObj.even + currentVal };
console.log(
  "Object sum of odd & even : ",
  arr.reduce(sumOfOddEvenObj, { odd: 0, even: 0 })
);

/* ------------------------------------------------ */

/* Problems related to Array of Strings */
console.log("\n************ Problems related to Array of Strings *********\n");

// Modify str as object : Array of objects with key as string and value as len(string)
console.log(
  "Array of objects with key as string and value as len(string) :\n",
  strArr.reduce(
    (resultObj, currentEle) => ({
      ...resultObj,
      [currentEle]: currentEle.length,
    }),
    {}
  )
);

/* ------------------------------------------------ */

//Number of strings with similar no.of Chars
const noOfStrinsWithSimilarLength = (resultObj, currentStr) => {
  if (resultObj[currentStr.length] === undefined) {
    return { ...resultObj, [currentStr.length]: 1 };
  } else {
    return {
      ...resultObj,
      [currentStr.length]: resultObj[currentStr.length] + 1,
    };
  }
};
console.log(
  "No.of Strings with similar length : \n",
  strArr.reduce(noOfStrinsWithSimilarLength, {})
);

/* ------------------------------------------------ */

//String has vowels
const isVowel = (ch) => "aeiou".includes(ch.toLowerCase());

const strHasVowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      return true;
    }
  }
};

console.log("String with vowels :\n", strArr.filter(strHasVowel));

/* ------------------------------------------------ */

//Custom Reduce Function using For Loop
const customReduceFunc = (array, callbackFunc, intialValue) => {
  let startIndex = 0;

  if (intialValue === undefined && array.length > 0) {
    intialValue = array[0];
    startIndex = 1;
  } else if (intialValue && array.length === 0) {
    return intialValue;
  } else if (intialValue === undefined && array.length === 0) {
    return "TypeError";
  }

  for (let i = startIndex; i < array.length; i++) {
    intialValue = callbackFunc(intialValue, array[i]);
  }

  return intialValue;
};

console.log(
  "Custom Reduce : \n",
  customReduceFunc(strArr, noOfStrinsWithSimilarLength, {})
);

/* ------------------------------------------------ */

/* Compose Function */

const increment = (num) => num + 1;

const square = (num) => num * num;

const reduceFunc = (accumulator, currentFunc) => currentFunc(accumulator);

const compose = (...args) => {
  const wrapperFunc = (argument) => {
    console.log(args.reduce(reduceFunc, argument));
  };

  return wrapperFunc;
};

const incrementThenSquare = compose(increment, square);

incrementThenSquare(2);

/* ------------------------------------------------ */
