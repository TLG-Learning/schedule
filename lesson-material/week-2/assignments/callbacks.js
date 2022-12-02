// a callback that returns a transformed value
const doubleNum = (num) => num * 2;

// create a function called map that takes an array and a callback that returns a new array of transformed items
const map = (arr, callback) => {
  const results = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const result = callback(arr[i]);
    results.push(result);
  }

  return results;
};

// assign the new array to a variable
const doubles = map([1, 2, 3, 4, 5], doubleNum);

// console.log the results
console.log(doubles);

// create a function that accepts a value and returns true or false
const isEven = (num) => num % 2 === 0;

const filter = (arr, callback) => {
  const results = [];

  for (let i = 0; i < results.length - 1; i++) {
    if (callback(arr[i])) {
      results.push(arr[i]);
    }
  }

  results;
};

const evens = filter([1, 2, 3, 4, 5], isEven);

const nums = [1, 2, 3, 4, 5, 6];

// create a function that changes the current value
const addTo = (num, currentValue) => num + currentValue;

// create a function called reduce that takes an array, callback, initial value and returns a single value
const reduce = (arr, callback, initialValue) => {
  let accumulator = initialValue;

  for (let i = 0; i <= arr.length - 1; i++) {
    const result = callback(arr[i], accumulator);

    accumulator = result;
  }

  return accumulator;
};

console.log(reduce(nums, addTo, 0));
