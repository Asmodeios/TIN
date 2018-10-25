function longestWord(s) {
  let maxWord = 0;
  let arr = s.split(/,\s|,|\s/);
  arr.sort((a,b) => {return a.length - b.length;});
  console.log(arr[arr.length-1]);
}

longestWord("Hello, priveeet ola")
