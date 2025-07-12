// Define Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // index signature to allow extra props
  }
  
  // Example usage
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  
  // Extended Directors interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  

// Function interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Function implementation
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  


  // Interface describing the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface describing the class
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementation
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass("Emmanuel", "Ogbonna");
  console.log(student.displayName());      // Output: Emmanuel
  console.log(student.workOnHomework());   // Output: Currently working
  