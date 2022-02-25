//Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const resultArr = arr.map((ele) => (ele % 2 !== 0 ? ele : ele + 1));
console.log(resultArr);

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

// const resultArr = family.filter((person) => person.haveCycle);
// console.log(resultArr.map((person) => person.name));

const isCycleReducer = (result, person) =>
  person.haveCycle ? [...result, person.name] : [...result];

console.log(family.reduce(isCycleReducer, []));

/* ------------------------------------------------ */

//Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
console.log(arr.filter((ele) => ele < 8 && !(ele & 1)));

/* ------------------------------------------------ */

//Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
console.log(arr.filter((ele) => ele.length > 5));

/* ------------------------------------------------ */

//Given an array. Write a function to get the sum of all elements which are greater than 50.
console.log(
  arr.reduce(
    (totalSum, currentVal) =>
      currentVal > 50 ? totalSum + currentVal : totalSum,
    0
  )
);

/* ------------------------------------------------ */

//Given an array. Write a function to find the product of all elements which are even
console.log(
  arr.reduce(
    (totalProduct, currentVal) =>
      !(currentVal & 1) ? totalProduct * currentVal : totalProduct,
    1
  )
);

/* ------------------------------------------------ */

//Given an array of objects. Write a function to find the sum of ages of each person.
const arr1 = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(
  arr1.reduce((totalAges, currentObj) => totalAges + currentObj.age, 0)
);

/* ------------------------------------------------ */

//Given an array. Convert it in to an object with key as the index of each element and value as the element itself.
console.log(
  arr.reduce(
    (resultObj, currentEle, index) => ({ ...resultObj, [index]: currentEle }),
    {}
  )
);

/* ------------------------------------------------ */

//Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’.
//If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.
const arr2 = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const modifiedArr = arr2.reduce((resultArr, currentObj) => {
  if (currentObj.name.length > 5) {
    return [...resultArr, { ...currentObj, type: "vegetable" }];
  } else {
    return [...resultArr, { ...currentObj, type: "Fruit" }];
  }
}, []);

console.log(modifiedArr);

/* ------------------------------------------------ */

const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

//Get all the items in an array whose quantity is less than 2.
console.log(inventory.filter((currentItem) => currentItem.quantity < 2));

//Get the total quantity of items present in the inventory.
console.log(
  inventory.reduce((total, currentItem) => total + currentItem.quantity, 0)
);

//Find the object which contains the item whose quantity is zero.
console.log(inventory.filter((currentItem) => currentItem.quantity === 0));

/* ------------------------------------------------ */

//Given an array. Write a function to join all elements of the array with a hyphen in between them.
const arr3 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

console.log(arr3.join("-"));

/* ------------------------------------------------ */

//Write a function that accepts a number as input and inserts hyphens between every two even numbers.
//If your input is: 24345687
//Your output should be: 2-23456-87

const str = "24345687";

const modifiedArr1 = [...str].reduce((resultStr, currentChar) => {
  if (resultStr.length) {
    if (
      !Number(resultStr[resultStr.length - 1] & 1) &&
      !Number(currentChar & 1)
    ) {
      return [...resultStr, "-", currentChar];
    } else {
      return [...resultStr, currentChar];
    }
  } else {
    return [...resultStr, currentChar];
  }
}, []);

console.log(modifiedArr1.join(""));

/* ------------------------------------------------ */

//Write a function that takes in a string and converts all the characters to uppercase.
const givenStr = "neogrammer";
console.log(givenStr.toUpperCase());

/* ------------------------------------------------ */

//Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.
const modifiedArr2 = [...givenStr].reduce((resultStr, currentChar) => {
  if ("aeiouAEUIO".includes(currentChar)) {
    return [...resultStr, currentChar.toUpperCase()];
  } else {
    return [...resultStr, currentChar.toLowerCase()];
  }
}, []);

console.log(modifiedArr2.join(""));

/* ------------------------------------------------ */

//Flatten an array without using flat().
const input = [
  ["a", "b", "c"],
  ["c", ["d", "e"]],
  ["e", "d", "f"],
];

const flatArray = (resultArr, currentItem) => {
  if (Array.isArray(currentItem)) {
    return [...resultArr, ...currentItem.reduce(flatArray, [])];
  } else {
    return [...resultArr, currentItem];
  }
};

console.log(input.reduce(flatArray, []));

/* ------------------------------------------------ */

//Count the occurrences of distinct elements in the given array.

const addChars = (resultObj, currentChar) => {
  if (resultObj.currentChar === undefined) {
    return { ...resultObj, [currentChar]: 1 };
  } else {
    return { ...resultObj, [currentChar]: resultObj.currentChar + 1 };
  }
};

console.log(input.reduce(flatArray, []).reduce(addChars, {}));

/* ------------------------------------------------ */
