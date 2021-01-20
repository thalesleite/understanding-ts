// interface is a contract of a class
interface Named {
  // must set once
  readonly name: string;
  // ? - can or not exist, optional
  outputName?: string;
}

interface Greetable extends Named {
  // interfaces dosent accept public/ptivate
  greet(phrase: string): void;
}

class Person1 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person1("Thales");

user1.greet("Hi there - I am");
