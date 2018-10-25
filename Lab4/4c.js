function pal (s) {
  let reversed = s.split('').reverse().join('');
  return s === reversed ? true : false;
}

console.log(pal("lol"));
