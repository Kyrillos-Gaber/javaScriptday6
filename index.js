function Box(_width, _height, _books) {
  this.width = _width;
  this.height = _height;
  this.books = _books;
}

Box.prototype.valueof = function () {
  let num = 0;
  for (let i = 0; i < this.books.length; i++)
    num += this.books[i].getPages();
  return num;
}

Box.prototype.calcArea = function () {
  return this.width * this.height;
}



function Book(_id, _name, _writer, _pages) {
  this.id = _id;
  this.name = _name;
  this.writer = _writer;
  this.pages = _pages;

}

Book.prototype.getPages = function () {
  return this.pages;
}


let book1 = new Book(1, "boo", "kyro", 200);
let book2 = new Book(2, "foo", "kkkk", 100);
let arr = [book1, book2];
let box = new Box(10, 20, arr);

console.log(box.valueof());
console.log(box.calcArea());


function Point3D(_x = 0, _y = 0, _z = 0) {
  this.x = _x;
  this.y = _y;
  this.z = _z;
}

Point3D.prototype.print3DPoint = function () {
  console.log(`3DPoint: X = ${this.x}, Y = ${this.y}, Z = ${this.z}`);
}

Point3D.prototype.calculateDistance = function (p2) {
  console.log(`Distance between points is X = ${p2.x - this.x}, Y = ${p2.y - this.y}, Z = ${p2.z - this.z}`);
}

let shape = new Point3D(1, 2, 3);
let shape2 = new Point3D(11, 12, 13);
shape.print3DPoint();

shape.calculateDistance(shape2);



function Course(_coursName, _grade) {
  this.coursName = _coursName;
  this.grade = _grade;
}

function Student(_name, _courses) {
  this.name = _name;
  this.courses = _courses;
}

Course.prototype.getCourseName = function() {
  return this.coursName;
}

Course.prototype.getGrade = function() {
  return this.grade;
}

Student.prototype.getAllCourses = function() {
  for (let i = 0; i < this.courses.length; i++) {
    console.log(this.courses[i].getCourseName());
  }
}

Student.prototype.allGrades = function() {
  let num = 0;
  for (let i = 0; i < this.courses.length; i++) {
    num += this.courses[i].getGrade();
  }
  return num;
}





let course1 = new Course("js", 65);
let course2 = new Course("c++", 90);
let arr2 = [course1, course2];
let std = new Student("kyro", arr2);

std.getAllCourses();
console.log(std.allGrades());