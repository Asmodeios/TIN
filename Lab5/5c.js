let studentPrototype = {
  courses: ["GRK", "TIN"]
}

/*
Creating new student object based on prtotoype
*/
function createStudent(studentProt, first, last, id) {
  let result = Object.create(studentProt);
  result.firstName = first;
  result.lastName = last;
  result.id = id;
  return result;
}

let st = createStudent(studentPrototype, "Dima", "Dolben", 1);

for (let prop in st) {
  console.log(prop);
}
console.log(st.courses);
