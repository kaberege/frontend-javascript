// holds student types
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "Mentor", lastName: "Developer", age: 30, location: "Kigali" }; // first student
const student2: Student = { firstName: "Instructor", lastName: "Senior", age: 40, location: "Rome" };  // second student
const studentsList: Student[] = [student1, student2];  // arrary of students

// table creation
const table: HTMLElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create table header
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation: HTMLTableCellElement = document.createElement("th");
headerLocation.textContent = "Location";


// append table headings to the first row
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

// Add students
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const nameCell: HTMLTableCellElement = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

