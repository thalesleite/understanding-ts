// Decorator = a function that you apply to something in a certain way
// decorators when your class is define not when it is instantiated
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Thales";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
