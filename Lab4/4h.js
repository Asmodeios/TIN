function secondMaxArr(arr) {
  let firstMax = Math.max.apply(Math, arr);
  let maxi = arr.indexOf(firstMax);
  arr[maxi] = -Infinity;
  secondMax = Math.max.apply(Math, arr);
  arr[maxi] = firstMax;
  return secondMax;

}
function secondMinArr(arr) {
  let firstMin = Math.min.apply(Math, arr);
  let mini = arr.indexOf(firstMin);
  arr[mini] = +Infinity;
  secondMin = Math.min.apply(Math, arr);
  arr[mini] = firstMin;
  return secondMin;
}

function idkHowToNameIt(arr) {
  let min = secondMinArr(arr);
  let max = secondMaxArr(arr);
  return "Second max is: " + max + " and second min is: " + min;
}
let array = [10,5,20,3,1,0]
console.log(idkHowToNameIt(array));
