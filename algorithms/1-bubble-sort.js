/**
 * bubble sort algorithm
 *
 * @param number[] arr
 */
const bubbleSort = arr => {
  arr = arr.slice();

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(arr);
      }
    }
  }

  return arr;
};

/**
 * bubble sort algorithm 2 - better approach
 * exits out when the array becomes sorted
 *
 * @param number[] arr
 */
const bubbleSort2 = arr => {
  arr = arr.slice();

  console.log(arr);

  let swapped = true;

  while (swapped === true) {
    swapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        console.log(arr);

        swapped = true;
      }
    }
  }

  return arr;
};

module.exports = { bubbleSort, bubbleSort2 };
