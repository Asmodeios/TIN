function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;

  Object.defineProperties(this, {
    'avgGrade' : { get: function() { return this.grades.reduce((a,b) => a + b, 0) / this.grades.length - 1; }},
    'getFullName' : { get: function() { return this.firstName + ' ' + this.lastName; }},
    'setFullName' : { set: function(fullName) { this.firstName = fullName[0]; this.lastName = fullName[1]; }}
  });
};

var student = new Student("Dima", "Lentay", 1, [5,5,2,5]);

console.log(student.avgGrade);
console.log(student.getFullName);
student.setFullName = ["Igor", "Programmer"];
console.log(student.getFullName);
