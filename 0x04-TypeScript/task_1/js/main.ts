// Defines teacher types
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Defines directors and exetends Teacher types
interface Directors extends Teacher {
    numberOfReports: number;
}

// Defines function types
interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

// Defines class types: StudentClass
interface ClassTypes {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// 1. Let's build a Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

// 2. Extending the Teacher class
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// 3. Printing teachers
const printTeacher: printTeacherFunction = (firstName, lastName): string => {

    const text: string = firstName.charAt(0) + "." + " " + lastName;
    return text;
}

// 4. Writing a class
class StudentClass implements ClassTypes {
    firstName: string;
    lastName: string;

    constructor(name1: string, name2: string) {
        this.firstName = name1;
        this.lastName = name2;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

console.log(teacher3);  // 1.Teacher interface
console.log(director1);  // 2. Extending the Teacher class
console.log(printTeacher("John", "Doe"));  // 3. Printing teachers

// 4. Writing a class
const nameObj:StudentClass = new StudentClass("John", "Doe"); 
console.log(nameObj.lastName);
console.log(nameObj.displayName());
console.log(nameObj.workOnHomework());


