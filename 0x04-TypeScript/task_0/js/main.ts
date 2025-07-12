// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    location: "Lagos",
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 22,
    location: "Abuja",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Create and style a table element
  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  
  // Add table header
  const headerRow = table.insertRow();
  ["First Name", "Location"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });
  
  // Add rows for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  
    cell1.style.padding = "8px";
    cell2.style.padding = "8px";
  });
  
  // Append table to the document body
  document.body.appendChild(table);
  