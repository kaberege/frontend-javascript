// holds student types
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    [key: string]: any;
}

const student1: Student = { firstName: "Mentor", lastName: "Developer", age: 30, location: "Kigali" }; // first student
const student2: Student = { firstName: "Instructor", lastName: "Senior", age: 40, location: "Rome" };  // second student
const studentsList: Student[] = [student1, student2];  // arrary of students

// table creation

const table: HTMLElement = document.createElement("table");
const row1: HTMLElement = document.createElement("tr");
const firstNameHeading: HTMLTableCellElement = document.createElement("th");
firstNameHeading.textContent = "First name";
const lastNameHeading: HTMLTableCellElement = document.createElement("th");
lastNameHeading.textContent = "Last name";
const ageHeading: HTMLTableCellElement = document.createElement("th");
ageHeading.textContent = "Age";
const locationHeading: HTMLTableCellElement = document.createElement("th");
locationHeading.textContent = "Location";

// append table headings to the first row
row1.appendChild(firstNameHeading);
row1.appendChild(lastNameHeading);
row1.appendChild(ageHeading);
row1.appendChild(locationHeading);
table.appendChild(row1);

// iterate through the list of students to generate rows with student's data(td)
studentsList.forEach(std => {
    const newRow: HTMLElement = document.createElement('tr');
    for (let obj in std) {
        const newTd: HTMLTableCellElement = document.createElement("td");
        newTd.textContent = `${std[obj]}`;
        newRow.appendChild(newTd);
    }
    table.appendChild(newRow);  // Insert new row into the table
});


