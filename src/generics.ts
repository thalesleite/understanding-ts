// // Generics = a type that is conecteced with another type
// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello generics!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Thales", hobbies: ["games"] }, { age: 28 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element!";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element!`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Sport", "Cooking"]));

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;

  return courseGoal as CourseGoal;
}
