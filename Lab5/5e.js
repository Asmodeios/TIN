class Student {
  constructor(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades = grades;
  };

  get avgGrade() {
    return this.grades.reduce((a,b) => a + b, 0) / this.grades.length;
  };

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  };

  set fullName(full) {
    this.firstName = full[0]; this.lastName = full[1];
  }
}

var student = new Student("Dima", "Lentay", 1, [5,5,2,5]);

console.log(student.avgGrade);
console.log(student.fullName);
student.fullName = ["Igor", "Programmer"];
console.log(student.fullName);
