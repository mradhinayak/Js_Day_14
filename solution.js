// Insertion Sort in Ascending Order
function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSortAsc([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

// Insertion Sort in Descending Order
function insertionSortDesc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSortDesc([5, 2, 9, 1, 5, 6]));

// Insert at correct position in already Ascending Order sorted array; 
function insertionAtCorrectPlace(arr, value) {
    arr.push(value);
  let j = arr.length - 2;
  while (j >= 0 && arr[j] > value) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = value;
  return arr;
}
console.log(insertionAtCorrectPlace([1, 3, 5, 6], 4));

