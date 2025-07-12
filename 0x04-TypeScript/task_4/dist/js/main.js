// import { Subjects } from './subjects/Cpp';
// import { Subjects as JavaSubjects } from './subjects/Java';
// import { Subjects as ReactSubjects } from './subjects/React';
// Create and export constants
export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
// Create and export a Teacher object with experienceTeachingC = 10
export var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map