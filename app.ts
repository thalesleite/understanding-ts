// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Thales",
  age: 28,
  hobbies: ["Movies", "Music", "Reading"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
