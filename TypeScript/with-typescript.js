// function add(a: number, b: number) {
//     return a + b;
// }
// const result = add(2, 5);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log(result);
//Basics of Typescript
//Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
//More Complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
// now use Person defined versus 
// let person: {
//     name: string;
//     age: number;
// }
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: true
// };
// this is an array of objects
// let people: {
//     name: string;
//     age: number;
// }[];
var people;
//Type inference
var course = 'React - The Complete Guide';
course = 12341;
//Functions & types
function add(a, b) {
    return a + b;
}
//void only works with functions and will not return anything asked for; you must instead work with undefined
function printoutput(value) {
    console.log(value);
}
//Generics
//instead of function insertAtBeginning(array: any[], value:any --> use function insertAtBeginning<T>(array: T[], value:T -> so now typescript can infer data type for that function
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
//updatedArray[0].split('');
//define properties and assign values through the constructor --> so instead of the below \/ then see uncommented
// class Student {
//     firstName:string;
//     lastName:string;
//     age:number;
//     private courses:string[];
//     constructor(first:string, last:string, age:number, couses:string[]) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.courses = courses;
//     }
// class Student {
//     firstName:string;
//     lastName:string;
//     age:number;
//     private courses:string[];
constructor(public, firstName, string, public, lastName, string, public, age, number, private, courses, string[]);
{ }
enrol(courseName, string);
{
    this.courses.push(courseName);
}
listCourses();
{
    return this.courses.slice();
}
//listCourses above ^ will return a copy of the array; so no one can alter the original
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    },
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!');
    };
    return Instructor;
}());
