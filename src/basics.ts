// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Thales",
//   age: 28,
//   hobbies: ["Movies", "Music", "Reading"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Thales",
  age: 28,
  hobbies: ["Movies", "Music", "Reading"],
  role: Role.AUTHOR,
};

// person.role.push('admin') // works
// person.role[1] = 10; // doesnt work
// person.role = [0, "admin"]; // correct way

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
