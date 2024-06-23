//                Assignment 1: Building Your Friend List
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName,
//   lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your
//   friend list.
var People = {
    Friends: []
};
var friend1 = {
    firstName: "Rimza",
    lastName: "Asad",
    id: 1001,
};
var friend2 = {
    firstName: "Astro",
    lastName: "A",
    id: 1002,
};
var friend3 = {
    firstName: "Beta",
    lastName: "b",
    id: 1003,
};
People.Friends.push(friend1, friend2, friend3);
console.log(People);
console.log("\n");
//---------------------------------------------------//
//                 Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1. Scrambled Array:
//o Start with an array of elements in a scrambled order, like:
//const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
//• Modify the Array:
//• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
//o Convert non-strings (booleans, numbers) to strings if needed.
//o Split elements into character arrays (optional).
//o Rearrange characters or elements in the desired order (modify original array or 
//  create temporary arrays).
//• Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC"
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 3);
scrambledArray.splice(2, 3, "Student", "of");
scrambledArray.splice(4, 1, "GIAIC");
console.log(scrambledArray.join(""));
console.log("\n");
//----------------------------------------------------//
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
// /Define an array named inventory to store product information
var inventory = [];
var product1 = {
    name: "laptop",
    model: "abc",
    cost: 20000,
    quantity: 20,
};
var product2 = {
    name: "chromebook",
    model: "five",
    cost: 10000,
    quantity: 10,
};
var product3 = {
    name: "lenovo think pad",
    model: "seven",
    cost: 500000,
    quantity: 15,
};
//Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
//Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(inventory[0].quantity, inventory[1].name, inventory[0].name);
var studentList = [
    { name: "alpha", isSenior: true, hasCompleatedAssignment: true },
    { name: "beta", isSenior: false, hasCompleatedAssignment: true },
    { name: "gama", isSenior: true, hasCompleatedAssignment: true },
    { name: "lamda", isSenior: false, hasCompleatedAssignment: false },
];
//Find Senior Students with Assignments (Optional):
//  The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
function findSeniorStudentsWithAssignments(student) {
    return studentList.filter(function (student) { return student.isSenior && student.hasCompleatedAssignment; });
}
var seniorStudents = findSeniorStudentsWithAssignments(studentList);
console.log(studentList);
