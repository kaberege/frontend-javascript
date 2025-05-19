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

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (firstName, lastName): string => {

    const text: string = firstName.charAt(0) + "." + " " + lastName;
    return text;
}

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));


