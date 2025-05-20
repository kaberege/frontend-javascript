/* =============  5. Advanced types Part 1 ============= */

// DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary == "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


/* =============  6. Creating functions specific to employees ============= */

function isDirector(employee: number | string): boolean {
    return createEmployee(employee) instanceof Director;
}

function executeWork(employee: number | string): string {
    if (isDirector(employee)) {
        return new Director().workDirectorTasks();

    } else {
        return new Teacher().workTeacherTasks();
    }
}

console.log("Final results:");
console.log(executeWork(200));
console.log(executeWork(1000));
console.log(executeWork('$500'));


/* ============= 7. String literal types ============= */

// Define the string literal type
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return "Teaching Math";
    } else {
        return "Teaching History"
    }
}

// Example usage
console.log(teachClass('Math'));  
console.log(teachClass('History'));