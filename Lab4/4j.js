function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== value && start < end) {
      if (value < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    return (arr[middle] !== value) ? -1 : middle;
}

let list = [10,3,4,6,25,32,28,45,90];
console.log(binarySearch(list, 4));
