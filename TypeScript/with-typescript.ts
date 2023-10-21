// function add(a: number, b: number) {
//     return a + b;
// }
// const result = add(2, 5);

// console.log(result);

//Basics of Typescript

//Primitives

let age: number;

age = 12;

let userName: string | string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More Complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// use alias 'Person'type instead of object 'person' type
// instead of typing out person -> use the Person as the alias to make it less typing
type Person = {
    let person: {
        name: string;
        age: number;
    }
}

// now use Person defined versus 
// let person: {
//     name: string;
//     age: number;
// }
let person: Person;

person = {
    name: 'Max',
    age: 32
}

// person = {
//     isEmployee: true
// };

// this is an array of objects
// let people: {
//     name: string;
//     age: number;
// }[];

let people: Person[];

//Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

//Functions & types

function add(a: number, b: number){
    return a + b;
}

//void only works with functions and will not return anything asked for; you must instead work with undefined
function printoutput(value: any){
    console.log(value);
}

//Generics
//instead of function insertAtBeginning(array: any[], value:any --> use function insertAtBeginning<T>(array: T[], value:T -> so now typescript can infer data type for that function

function insertAtBeginning<T>(array: T[], value:T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a','b','c'], 'd')

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

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enrol(courseName:string){
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }

//listCourses above ^ will return a copy of the array; so no one can alter the original

const student = new Student('Max','Schwarz',32,['Angular']);
student.enrol('React');

//student.listCourses();  => Angular, React

//student.courses => Angular, React

//can only store object that fulfills this specific interface and THAT contains the code
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}