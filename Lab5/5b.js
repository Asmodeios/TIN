function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;

  this.printInfo = function() {
    let avg = this.grades.reduce((a,b) => a + b, 0);
    console.log(this.firstName + ' ' + this.lastName + " has avarage grade: " + avg);
  };
};

var student = new Student("Dima", "Lentay", 1, [5,5,2,5]);

student.printInfo();
